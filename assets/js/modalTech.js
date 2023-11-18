//krst|pomazanie dialog
var dialog = document.getElementById("dialog");

var dialog1 = document.getElementById("item1");
dialog1.onclick = function () {
    dialog.style.display = "block";
    document.body.classList.add("stop-scrolling");
    document.getElementById("dialogTitle").innerHTML = `20b-linear 100MS/s DAC (Digital/Analog Converter) with 98dB SNR in 300kHz`;
    document.getElementById("dialogText").innerHTML = `
    <ul>
        <li>Implementation technology: X-FAB 180nm SOI (XT018) 5+1 Metal, Double-MiM Cap for high linearity and low temp. coeff.</li>
        <li>Architecture: digital oversampling <a href="https://en.wikipedia.org/wiki/Delta-sigma_modulation" target="_blank">Sigma-Delta Modulator</a> with 38 current-steering cells and 2-stage 3rd order analog active-RC reconstruction filtering with two fully differential Voltage Amplifiers</li>
        <li>Power Supply: 1.8Vdd analog & digital core, 5Vdd analog power output</li>
    </ul>
    <div class="image">
        <img src="../assets/img/item1.png">
    </div>
    <ul>
        <li>20bit 10MS/s digital input interpolated (10x, 20x) to 100MS/s as oversampling <a href="https://en.wikipedia.org/wiki/Delta-sigma_modulation" target="_blank">Sigma-Delta Modulator</a> input</li>
        <li>3 different digital scrambler/randomizer implemented: Dynamic Element Matching (DEM), Data Weighted Averaging (DWA)</li>
        <li>Fully differential 2-stage analog signal path with out-of-band noise filtering (> 1,25MHz)</li>
    </ul>
    `;
};

var dialog2 = document.getElementById("item2");
dialog2.onclick = function () {
    dialog.style.display = "block";
    document.body.classList.add("stop-scrolling");
    document.getElementById("dialogTitle").innerHTML = `14b 30kS/s cyclic/algorithmic serial ADC (Analog/ Digital Converter)`;
    document.getElementById("dialogText").innerHTML = `
    <div class="flex">
        <ul>
            <li>Effective Number of Bits: 13.5b (SNDR=83dB signal-to-noise-and-distortion-ratio)</li>
            <li>Power supply 3.3V, Power Consumption 170µW</li>
            <li>0.35um CMOS Technology</li>
            <li>Low input sampling capacitor of 4pF</li>
            <li>Pseudo-differential analog voltage input (3 pins: Vin+, Vin- with adjustable common mode level Vcm)</li>
            <li>Layout chip area < 0,8mm²</li>
            <li>External clock rate 3-4MHz</li>
        </ul>
        <img src="../assets/img/item2.png">
    </div>
    <div class="quote">
        <div>
            <p><a href="https://continiumtech.com/wp-content/uploads/2022/06/A-case-study-of-a-cyclic-RSD-ADC-by-Izak-Kindt.pdf" target="_blank">An analog approach to compensate for OpAmp offset and finite gain in SC circuitry: A case study of a cyclic RSD ADC →</a></p>
            <p>Reprint of the publication from 3rd IEE International Conference on Advanced A/D and D/A Conversion Techniques and their Applications (ADDA’02) Prague, Czech Republic, June 2002</p>
        </div>
        <img src="../assets/img/quote.png">
    </div>
    `;
};

var dialog3 = document.getElementById("item3");
dialog3.onclick = function () {
    dialog.style.display = "block";
    document.body.classList.add("stop-scrolling");
    document.getElementById("dialogTitle").innerHTML = `15b 4kS/s cyclic/algorithmic serial ADC (Analog/ Digital Converter)`;
    document.getElementById("dialogText").innerHTML = `
    <div class="flex">
        <ul>
            <li>Effective Number of Bits: 15b (SNDR=92dB signal-to-noise-and-distortion-ratio) with digital IIR filter post-processing</li>
            <li>Power supply 3.3V, Power Consumption 200µW</li>
            <li>0.35um CMOS Technology</li>
            <li>Low input sampling capacitor of 4pF</li>
            <li>Pseudo differential analog voltage input (3 pins: Vin+, Vin- with adjustable common mode level Vcm)</li>
            <li>Layout chip area < 0,8mm²</li>
        </ul>
        <img src="../assets/img/item2.png">
    </div>
    <div class="quote">
        <div>
            <p><a href="https://continiumtech.com/wp-content/uploads/2022/06/A-case-study-of-a-cyclic-RSD-ADC-by-Izak-Kindt.pdf" target="_blank">An analog approach to compensate for OpAmp offset and finite gain in SC circuitry: A case study of a cyclic RSD ADC →</a></p>
            <p>Reprint of the publication from 3rd IEE International Conference on Advanced A/D and D/A Conversion Techniques and their Applications (ADDA’02) Prague, Czech Republic, June 2002</p>
        </div>
        <img src="../assets/img/quote.png">
    </div>
    `;
};

var dialog4 = document.getElementById("item4");
dialog4.onclick = function () {
    dialog.style.display = "block";
    document.body.classList.add("stop-scrolling");
    document.getElementById("dialogTitle").innerHTML = `12b 1MS/s cyclic/algorithmic serial ADC (Analog/ Digital Converter)`;
    document.getElementById("dialogText").innerHTML = `
    <div class="flex">
        <ul>
            <li>Effective Number of Bits: 11b (SNDR=68dB signal-to-noise-and-distortion-ratio)</li>
            <li>Power supply 3.3V</li>
            <li>0.35um CMOS Technology</li>
            <li>Low input sampling capacitor of 7pF</li>
            <li>Fully differential analog voltage input (3 pins: Vin+, Vin- with adjustable common mode level Vcm)</li>
            <li>Layout chip area 0.75mm²</li>
        </ul>
        <img src="../assets/img/item2.png">
    </div>
    <div class="quote">
        <div>
            <p><a href="https://continiumtech.com/wp-content/uploads/2022/06/A-case-study-of-a-cyclic-RSD-ADC-by-Izak-Kindt.pdf" target="_blank">An analog approach to compensate for OpAmp offset and finite gain in SC circuitry: A case study of a cyclic RSD ADC →</a></p>
            <p>Reprint of the publication from 3rd IEE International Conference on Advanced A/D and D/A Conversion Techniques and their Applications (ADDA’02) Prague, Czech Republic, June 2002</p>
        </div>
        <img src="../assets/img/quote.png">
    </div>
    `;
};

var dialog5 = document.getElementById("item5");
dialog5.onclick = function () {
    dialog.style.display = "block";
    document.body.classList.add("stop-scrolling");
    document.getElementById("dialogTitle").innerHTML = `14b 560kS/s pipeline ADC (Analog/ Digital Converter)`;
    document.getElementById("dialogText").innerHTML = `
    <p>
    </p>
    `;
};

var dialog6 = document.getElementById("item6");
dialog6.onclick = function () {
    dialog.style.display = "block";
    document.body.classList.add("stop-scrolling");
    document.getElementById("dialogTitle").innerHTML = `LiDAR: optical receiver amplifier with 135dB dynamic range in SiGe`;
    document.getElementById("dialogText").innerHTML = `

    `;
};

var dialog7 = document.getElementById("item7");
dialog7.onclick = function () {
    dialog.style.display = "block";
    document.body.classList.add("stop-scrolling");
    document.getElementById("dialogTitle").innerHTML = ``;
    document.getElementById("dialogText").innerHTML = `
    <p>
    </p>
    `;
};

var dialog8 = document.getElementById("item8");
dialog8.onclick = function () {
    dialog.style.display = "block";
    document.body.classList.add("stop-scrolling");
    document.getElementById("dialogTitle").innerHTML = `Universally reconfigurable 14-bit capacitive sensor interface`;
    document.getElementById("dialogText").innerHTML = `
    <p>
    </p>
    `;
};

var span = document.getElementsByClassName("close-modal")[0];
span.onclick = function () {
    dialog.scrollTop = 0;
    dialog.style.display = "none";
    document.body.classList.remove("stop-scrolling");
};

window.onclick = function (event) {
    if (event.target == dialog) {
        dialog.scrollTop = 0;
        dialog.style.display = "none";
        document.body.classList.remove("stop-scrolling");
    }
};
