function checkMotor()
{
    // Get values entered by the user
    let motorName = document.getElementById("motorName").value;
    let ratedCurrent = parseFloat(document.getElementById("ratedCurrent").value);
    let measuredCurrent = parseFloat(document.getElementById("measuredCurrent").value);

    // Check for empty fields
    if (motorName === "" || isNaN(ratedCurrent) || isNaN(measuredCurrent))
    {
        document.getElementById("result").innerHTML =
        "<h3 style='color:red;'>Please fill in all fields.</h3>";

        return;
    }

    // Validate current values
    if (ratedCurrent <= 0 || measuredCurrent < 0)
    {
        document.getElementById("result").innerHTML =
        "<h3 style='color:red;'>Invalid current values entered.</h3>";

        return;
    }

    // Calculate current difference
    let difference = measuredCurrent - ratedCurrent;

    let status = "";
    let color = "";

    // Determine motor status
    if (measuredCurrent <= ratedCurrent)
    {
        status = "SAFE OPERATION";
        color = "green";
    }
    else
    {
        status = "OVERLOAD WARNING";
        color = "red";
    }

    // Display result
    document.getElementById("result").innerHTML =
    `
    <h2>Motor Report</h2>

    <p><strong>Motor Name:</strong> ${motorName}</p>

    <p><strong>Rated Current:</strong> ${ratedCurrent} A</p>

    <p><strong>Measured Current:</strong> ${measuredCurrent} A</p>

    <p><strong>Current Difference:</strong> ${difference.toFixed(2)} A</p>

    <h2 style="color:${color};">${status}</h2>
    `;
}