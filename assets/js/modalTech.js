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
    <div class="flex">
        <ul>
            <li>Effective Number of Bits: 13.5b (SNDR=83dB signal-to-noise-and-distortion-ratio)</li>
            <li>Power supply 3.3V, Power Consumption 2,4mW</li>
            <li>0.35um CMOS Technology</li>
            <li>Low input sampling capacitor of 4pF</li>
            <li>Fully differential analog voltage input (3 pins: Vin+, Vin- with adjustable common mode level Vcm)</li>
            <li>Chip area ~ 14mm²</li>
        </ul>
        <img src="../assets/img/item5.png">
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

var dialog6 = document.getElementById("item6");
dialog6.onclick = function () {
    dialog.style.display = "block";
    document.body.classList.add("stop-scrolling");
    document.getElementById("dialogTitle").innerHTML = `LiDAR: optical receiver amplifier with 135dB dynamic range in SiGe`;
    document.getElementById("dialogText").innerHTML = `
    <p>One of the main problems at the receiver side of the LiDAR systems is the high amplitude variation of the reflected optical pulse, depending on the measurement distance, reflectivity, and angle of the reflection.</p>
    <p>The dynamic range of the reflected signal depends on the application and can reach seven or even more orders of magnitude. Such a kind of optical signal can easily saturate or even damage conventional optical receivers based on a linear trans-impedance amplifier (TIA), thus making it insensitive to the incoming optical signal. The proposed optical receiver overcomes this problem by using input-current logarithmic compression.</p>
    <p>The concept is shown in Figure:</p>
    <img src="../assets/img/item6.png">
    `;
};

var dialog7 = document.getElementById("item7");
dialog7.onclick = function () {
    dialog.style.display = "block";
    document.body.classList.add("stop-scrolling");
    document.getElementById("dialogTitle").innerHTML = `Wireless 5G base station transceiver`;
    document.getElementById("dialogText").innerHTML = `
    <p>Our CTSD ADC product idea for wireless receivers is the ultimate solution to all 5G deployment challenges postulated in 2019 by Zhengmao Li (VP of China Mobile) as they counteract all three issues at once:</p>
    <ul>
        <li>5G needs 3x more base stations for the same coverage as 4G-LTE due to higher frequencies => higher receiver sensitivity allows larger cell size</li>
        <li>Power consumption of a 5G base station is 3x LTE => OPEX saving by applying CTSD ADCs</li>
        <li>5G base station costs 4x price of LTE => CAPEX saving by higher integration level of CTSD ADCs</li>
    </ul>
    <img class="smaller" src="../assets/img/item7.png">
    <p>The development of this product is in general a very big challenge for a development team. It requires best-in-class experts in several very different fields of analog, digital, and mixed-signal design. Teams which offer the necessary mixture of experts are at the moment not available and very difficult to establish.</p>
    <p>In addition, such development involves a very high, and in numbers very difficult to predict, financial risk to companies that have never worked in this field before. These are the reasons why up to now no modern wireless receiver CTSD ADC product for BTS units is available on the market although the customers have been demanding it for at least 10 years.</p>
    `;
};

var dialog8 = document.getElementById("item8");
dialog8.onclick = function () {
    dialog.style.display = "block";
    document.body.classList.add("stop-scrolling");
    document.getElementById("dialogTitle").innerHTML = `Universally reconfigurable 14-bit capacitive sensor interface`;
    document.getElementById("dialogText").innerHTML = `
    <p>Capacitative sensors are gaining importance in the sensory world and even more in microsystem/MEMS technology. This is mainly due to the increasing use of micromechanics for pressure monitoring and inertial sensors (accelerometer, gyroscopes), as well as the introduction of new sensor principles, such as stray capacitors. In order to be able to serve this growing ASIC market, it is necessary to design new readout interfaces for these capacitive sensors, because the old methods for resistive sensors (bridge readout) are not usable. The goal of our product is to serve as general purpose transducer for all kinds of capacitive sensors, which consists of an SC interface circuit, a 14b switched capacitor ADC for digitizing the signals, and a digital signal processing unit (temperature compensation, sensor capacitance curve linearization). The core of the capSens interface is a free reconfigurable SC circuitry (capacitance difference measurement, capacitance ratio measurement, force feedback measurement) with 5 operation modes:</p>
    <p>Read out of the difference between floating sensors and reference capacitors with one reference voltage:</p>
    <img class="smaller" src="../assets/img/item8_1.png">
    <p>Read out of the difference between the sensor and reference capacitor if one side of the sensor has to be connected to the ground:</p>
    <p>Read out of the difference between sensor and reference capacitor (or differential sensor) with two reference voltages:</p>
    <p>Read out differential sensors (e.g. acceleration) with the back coupling of the output voltage (e.g. force feedback) to operate the sensor in the middle:</p>
    <img class="smaller" src="../assets/img/item8_2.png">
    <p>Read out of a capacitor ratio (external integration capacitor):</p>
    <img class="smaller" src="../assets/img/item8_3.png">
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
