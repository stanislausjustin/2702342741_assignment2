const ratings = { 5: 3, 4: 5, 3: 2, 2: 3, 1: 1 }; 
const totalReviews = Object.values(ratings).reduce((a, b) => a + b, 0);
const averageRating = (Object.entries(ratings).reduce((sum, [star, count]) => sum + star * count, 0) / totalReviews).toFixed(1);

// Update the star rating display
document.getElementById("star-rating").innerHTML = "⭐".repeat(Math.floor(averageRating)) + (averageRating % 1 ? "☆" : "");

// Update the average rating text
document.getElementById("average-rating").innerText = `${averageRating} average based on ${totalReviews} reviews.`;

// Update the progress bars
Object.entries(ratings).forEach(([star, count]) => {
    const percentage = (count / totalReviews) * 100;
    document.getElementById(`count-${star}`).innerText = count;
    document.querySelector(`.progress-${star}`).style.width = `${percentage}%`;
});
