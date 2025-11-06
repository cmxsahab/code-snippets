
document.addEventListener('DOMContentLoaded', async () => {
  const aData = document.querySelector(".array-data");
  const targetUrl = "https://cds-beta.thepublive.com/publisher/3466/navbar/";
  const credentials = btoa("8WAVjx9181NdacaIlwwqRWpzjPsEbgZMioFk7oCw5ltnG1CAQI:VUAbCZIvx6W693LshCTbolVSQBE3mBLDH7ZcOsG3PqfBqglkLb");

  try {
    const response = await fetch(targetUrl, {
      method: "GET",
      headers: {
        "Authorization": `Basic ${credentials}`,
        "Content-Type": "application/json"
      },
      credentials: "include"
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Navbar data:", data);
    aData.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;

  } catch (error) {
    console.error("Error fetching navbar:", error);
  }
});

