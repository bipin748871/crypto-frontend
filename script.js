
async function predict() {
  const question = document.getElementById("question").value;
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "⏳ Predicting...";

  try {
    const response = await fetch("https://crypto-predictor-d3qs.onrender.com/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ question })
    });

    if (!response.ok) {
      throw new Error("API response not OK");
    }

    const data = await response.json();
    resultDiv.innerHTML = `✅ <b>${data.answer}</b> (${data.confidence}%)<br/>💡 ${data.reason}`;
  } catch (error) {
    console.error("Error:", error);
    resultDiv.innerHTML = "❌ Error connecting to AI backend.";
  }
}
