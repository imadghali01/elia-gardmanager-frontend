// ShiftCardAdmin.jsx
// Ce fichier contient la fonction pour récupérer les données

// La fonction getSwitchesAndUsers va chercher les données, les fusionner, et les trier.
async function getSwitchesAndUsers() {
  try {
    // 1. Récupère les données "switch" depuis ton API
    const switchRes = await fetch("http://localhost:8000/switch");
    const allSwitches = await switchRes.json();

    // 2. Récupère les données "user" depuis ton API
    const userRes = await fetch("http://localhost:8000/user");
    const allUsers = await userRes.json();

    // 3. Crée une "map" pour retrouver facilement un utilisateur grâce à son ID
    const usersMap = allUsers.reduce((acc, user) => {
      acc[user._id] = user;
      return acc;
    }, {});

    // 4. Récupère le solde (balance) pour le currentUser via la route dédiée
    const balanceRes = await fetch(
      `http://localhost:8000/switch/${currentUser.userId}`
    );
    const balanceData = await balanceRes.json();
    const balance = balanceData?.balance || 0;

    // 5. Pour chaque switch, fusionne les données du switch et de l'utilisateur
    // en formatant dateIn, dateOut, createdAt et en assignant score: balance
    const mergedData = [];
    for (const sw of allSwitches) {
      // On récupère l'utilisateur associé à ce switch
      const userFound = usersMap[sw.userOne] || {};

      mergedData.push({
        ...sw,
        dateIn: sw.dateIn
          ? new Date(sw.dateIn).toISOString().split("T")[0]
          : sw.dateIn,
        dateOut: sw.dateOut
          ? new Date(sw.dateOut).toISOString().split("T")[0]
          : sw.dateOut,
        createdAt: sw.createdAt
          ? new Date(sw.createdAt).toISOString().split("T")[0]
          : sw.createdAt,
        score: balance, // La clé score prend la valeur récupérée dans balance
        fullName: userFound.fullName, // Nom complet de l'utilisateur
        email: userFound.email,
        phone: userFound.phone,
      });
    }

    // 6. On sépare les données en 3 groupes en fonction de l'état ("state")
    const available = mergedData.filter((item) => item.state === "waiting");
    const pending = mergedData.filter((item) => item.state === "processing");
    const finished = mergedData.filter((item) => item.state === "validate");
    console.log(available);
    console.log(pending);
    console.log(finished);
    // 7. On retourne les 3 groupes dans un objet
    return { available, pending, finished };
  } catch (error) {
    console.error(
      "Erreur lors de la récupération ou du tri des données :",
      error
    );
    throw error;
  }
}

// Exporte la fonction pour pouvoir l'utiliser dans un autre fichier.
export { getSwitchesAndUsers };
