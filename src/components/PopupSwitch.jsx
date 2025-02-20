import Schedule from "../models/Schedule"; // Ajustez le chemin selon votre structure

export async function validateSwitch(updatedSwitch) {
  // Extraction des informations nécessaires depuis le switch mis à jour
  const { dateIn, dateOut, userOne, userTwo } = updatedSwitch;
  const dIn = new Date(dateIn);
  const dOut = new Date(dateOut);

  // Récupération de tous les schedules (ou filtrez selon votre logique)
  const allSchedules = await Schedule.find({});

  // Stockage des schedules mis à jour
  const updatedSchedules = [];

  // Parcours de chaque schedule
  for (const schedule of allSchedules) {
    let hasDateInRange = false; // Au moins une date dans l'intervalle
    let scheduleNeedsSave = false; // Indique si le schedule a été modifié

    // Parcours de chaque shift dans le schedule
    for (const shiftKey in schedule.shifts) {
      const shift = schedule.shifts[shiftKey];

      // Parcours de chaque jour dans le shift (ex: lundi, mardi, etc.)
      for (const dayKey in shift) {
        const dayData = shift[dayKey];
        // Format attendu : [ dateJour, userId, statusId ]
        if (!Array.isArray(dayData) || dayData.length < 2) {
          continue;
        }

        const [currentDate, assignedUser] = dayData;
        // Conversion de currentDate en objet Date
        const currentDateObj = new Date(currentDate);

        // Vérifie si la date se trouve dans l'intervalle [dIn, dOut]
        if (currentDateObj >= dIn && currentDateObj <= dOut) {
          hasDateInRange = true;

          // Si c'est l'userOne, on le remplace par userTwo
          if (String(assignedUser) === String(userOne)) {
            dayData[1] = userTwo;
            scheduleNeedsSave = true;
          }
        }
      }
    }

    // Si le schedule contient une date dans l'intervalle et a été modifié, on le sauvegarde
    if (hasDateInRange && scheduleNeedsSave) {
      await schedule.save();
      updatedSchedules.push(schedule);
    }
  }

  const message =
    updatedSchedules.length === 0
      ? "Switch créé, mais aucun schedule n'a été mis à jour (aucune date concernée ou aucun userOne à remplacer)."
      : "Switch créé et schedules mis à jour avec succès.";

  // Retourne un objet récapitulatif (selon vos besoins, vous pouvez adapter le retour)
  return {
    message,
    switch: updatedSwitch,
    updatedSchedules,
  };
}
