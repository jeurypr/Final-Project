function calculateCalories(event) {
  event.preventDefault();

  const activitySelect = document.getElementById("activity");
  const durationInput = document.getElementById("duration");
  const resultElement = document.getElementById("result");

  const activity = activitySelect.value;
  const duration = parseInt(durationInput.value);

  let caloriesBurned = 0;

  if (activity === "running") {
    caloriesBurned = duration * 10;
  } else if (activity === "cycling") {
    caloriesBurned = duration * 8;
  } else if (activity === "swimming") {
    caloriesBurned = duration * 12;
  } else if (activity === "weightlifting") {
    caloriesBurned = duration * 6;
  }

  resultElement.textContent = `You burned approximately ${caloriesBurned} calories during the ${activity} activity.`;
}
