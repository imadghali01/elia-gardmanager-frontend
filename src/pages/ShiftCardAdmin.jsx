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

    // 4. Pour chaque switch, récupère le score et fusionne les données du switch et de l'utilisateur
    const mergedData = [];
    for (const sw of allSwitches) {
      let score = 0;
      try {
        // On va chercher le score (si ton API le fournit)
        const scoreRes = await fetch(
          `http://localhost:8000/switch/${sw.userOne}`
        );
        const scoreData = await scoreRes.json();
        score = scoreData?.score || 0;
      } catch (err) {
        console.error("Erreur lors de la récupération du score :", err);
      }

      // On récupère l'utilisateur associé à ce switch
      const userFound = usersMap[sw.userOne] || {};

      // On fusionne les données
      mergedData.push({
        ...sw,
        score,
        fullName: userFound.fullName, // Nom complet de l'utilisateur
        email: userFound.email,
        phone: userFound.phone,
      });
    }

    // 5. On sépare les données en 3 groupes en fonction de l'état ("state")
    const available = mergedData.filter((item) => item.state === "waiting");
    const pending = mergedData.filter((item) => item.state === "processing");
    const finished = mergedData.filter((item) => item.state === "validate");
    console.log(available);
    console.log(pending);
    console.log(finished);
    // 6. On retourne les 3 groupes dans un objet
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
