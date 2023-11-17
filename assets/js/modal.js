//krst|pomazanie dialog
var dialog = document.getElementById("dialog");

var dialog1 = document.getElementById("analog-circuit");
dialog1.onclick = function () {
    dialog.style.display = "block";
    document.body.classList.add("stop-scrolling");
    document.getElementById("dialogTitle").innerHTML = `Analog Circuit Designer /<br>Mixed-Signal Circuit Designer`;
    document.getElementById("dialogText").innerHTML = `
    <p>
        <b>Location:</b><br>
        Košice and Bratislava/ Slovakia and Germany/Bavaria
    </p>
    <p>
        <b>Responsibilities:</b>
        <ul>
            <li>Implementation of analog and mixed-signal integrated circuit modules used in wireless semiconductors or power products based on existing system specification</li>
            <li>Definition of concept, Understanding of customer system requirements</li>
            <li>Circuit topology knowledge, Circuit design, and SPICE simulation of e.g. operation amplifiers (folded cascode Amp, fully differential Amp with common-mode feedback, Amp’s frequency compensation, multi-stage Amps), precision bandgap voltage or current references, current biasing of analog circuits, PLL clock synthesizer devices, high, mixers or LNA RF amplifiers</li>
            <li>Low power/low voltage analog design techniques, Noise Optimization of analog circuits</li>
            <li>Analog/Digital-Signal circuit simulation (SPICE) on a transistor, block as well as system top-level using Cadence design environment or Tanner/Mentor Design flow</li>
            <li>Understanding of data converter architectures and working principles would be a benefit:Nyquist Switched-Capacitor (SC) ADC conversion, and oversampling Sigma-Delta ADC (A/D converters) with noise shaping, current-steering DAC cells (D/A converters)</li>
            <li>Behavioural modeling of designed blocks (VerilogA, VHDL-AMS) or signal processing in MATLAB</li>
            <li>Guidance and supervision of the layout mask engineer (understanding of matching properties and parasitic R/L/C elements)</li>
            <li>Development of test concept and support of test program development</li>
            <li>Lab characterization and debugging of modules and the IC product</li>
        </ul>
    </p>
    <p>
        <b>Qualifications (professionals or graduates):</b>
        <ul>
            <li>University: Master’s or Ph.D. degree in Electrical Engineering or Semiconductor Technology</li>
            <li>Main focus on analog circuit design, communications, microelectronics, or semiconductor physics</li>
            <li>Knowledge of nano-meter CMOS/FinFET technologies, semiconductor devices (MOS & bipolar transistor) or high-frequency RF electronics</li>
            <li>Hands-on experience with Analog/Mixed-Signal IC design flow from System specification to Chip TapeOut, circuit SPICE simulation, and lab analysis/measurements</li>
            <li>CAD skills: Cadence, Mentor Graphics/Tanner or Synopsys design environment: schematic entry, SPICE-based circuit simulators, physical layout design and DRC/ERC/LVS layout verification in Assura, Calibre, Galaxy, post-layout simulation and debugging</li>
            <li>Unix/Linux skills required</li>
            <li>Experience with internet-based home office work (TeamViewer or WebEx meetings)</li>
        </ul>
    </p>
    <p>
        <b>Apply here:</b><br>
        Send us your CV to <a href="mailto:service@continiumtech.com">service@continiumtech.com</a>
    </p>
    `;
};

var dialog2 = document.getElementById("physical-layout");
dialog2.onclick = function () {
    dialog.style.display = "block";
    document.body.classList.add("stop-scrolling");
    document.getElementById("dialogTitle").innerHTML = `Physical Layout Designer`;
    document.getElementById("dialogText").innerHTML = `
    <p>
        <b>Location:</b><br>
        Košice and Bratislava/ Slovakia and Germany/Bavaria
    </p>
    <p>
        <b>Responsibilities:</b>
        <ul>
            <li>Full-custom physical mask design of analog circuit blocks incl. parametric-cell (pCell) design, and/or place-and-route (P&R) of digital HDL-based logic circuits</li>
            <li>Provision of full custom layout tool functionality, including schematic-driven layout connectivity (based on Cadence tool Virtuoso Layout Suite L & XL or Mentor/Tanner or Synopsys)</li>
            <li>Provision of an automated routing solution for full custom and mixed-signal designs (based on Cadence CSR or Synopsys tools)</li>
            <li>Understanding of semiconductor element’s matching properties of parasitic R/L/C elements, and debugging capability to localize the signal disturbance coupling in existing mask layout design.</li>
            <li>Layout verification: design rule check (DRC), electric rule check (ERC), parasitic extraction (RCX) layout vs. Schematic (LVS) using state-of-the-art CAD tools (Cadence Assura/RCX, Mentor Calibre/Galaxy, Synopsys IC compiler)</li>
            <li>Understanding of a chip foundry PDK (process development kit) and its design rules</li>
            <li>Interface to CAD vendors, technology and modeling group, support of internal and external customers, and reviews</li>
            <li>Quality assurance: component test, test within schematic-to-layout-flow; participation in complete flow quality assurance</li>
            <li>Management of chip TapeOut process (GDSII stream out)</li>
        </ul>
    </p>
    <p>
        <b>Qualifications (professionals or graduates):</b>
        <ul>
            <li>University: Master’s degree in Electrical Engineering or technical college education background</li>
            <li>Knowledge of RF/mixed-signal design process peculiarities and CMOS/FinFET semiconductor technologies</li>
            <li>CAD skills required (Cadence, Mentor Graphics/Tanner or Synopsys design environment: physical layout design using Virtuoso or Galaxy, automated P&R using Cadence Space-Based Router or Synopsys IC compiler or Mentor Galaxy, and layout verification in Assura/RCX, Calibre)</li>
            <li>Experience in physical mask design and/or design automation for analog/mixed-signal ICs</li>
            <li>Unix/Linux skills required</li>
            <li>Experience with internet-based home office work (TeamViewer or WebEx meetings)</li>
            <li>Experience in programming (Perl, TCL, Shell Scripting, C, C++ skills) would be a benefit</li>
            <li>Analytic work methodology and problem analysis</li>
        </ul>
    </p>
    <p>
        <b>Apply here:</b><br>
        Send us your CV to <a href="mailto:service@continiumtech.com">service@continiumtech.com</a>
    </p>
    `;
};

var dialog3 = document.getElementById("digital-hdl");
dialog3.onclick = function () {
    dialog.style.display = "block";
    document.body.classList.add("stop-scrolling");
    document.getElementById("dialogTitle").innerHTML = `Digital HDL Circuit Designer`;
    document.getElementById("dialogText").innerHTML = `
    <p>
        <b>Location:</b><br>
        Košice and Bratislava/ Slovakia and Germany/Bavaria
    </p>
    <p>
        <b>Responsibilities:</b>
        <ul>
            <li>Digital logic design and implementation of FIR/IIR/Wave-digital decimation filters or high-speed data interfaces (JESD204, SPI, PCI) and serializers based on existing specifications in nano-meter CMOS/FinFET technologies</li>
            <li>HDL (Hardware description language: Verilog/VHDL) Synthesis for integrated circuits (IC) or design experience with FPGA digital programmable devices (Field programmable gate array: Xilinx, Altera)</li>
            <li>Logic verification and logic simulation on the RTL level or on the transistor level</li>
            <li>Static Timing Analysis (STA), Power estimation and optimization, circuit analysis & debugging</li>
            <li>Test pattern generation experience using ATPG and logic simulation tools and support of test program development</li>
            <li>Generation of library views and macro preparation (e.g. VHDL entity)</li>
            <li>Low power and asynchronous digital design techniques</li>
            <li>Behavioural modeling of mixed-signal blocks (Verilog-AMS, VHDL-AMS) providing an interface to analog design engineers</li>
            <li>Signal processing in MATLAB: digital filter design, spectral analysis of digital filters</li>
            <li>Guidance and supervision of the P&R layout mask process</li>
            <li>Lab characterization and debugging of own digital modules</li>
        </ul>
    </p>
    <p>
        <b>Qualifications (professionals or graduates):</b>
        <ul>
            <li>University: Master’s or Ph.D. degree in Electrical Engineering or Communication Technologies</li>
            <li>Good understanding of VLSI and/or ASIC methodology and HDL design flow</li>
            <li>Main focus on digital design and digital filter design</li>
            <li>Experience in CMOS/FinFET logic design on a cell level</li>
            <li>Formal tools and Verification methods experience including modeling in C/C++, SystemC</li>
            <li>CAD digital skills required (Cadence, Mentor Graphics, or Synopsys)</li>
            <li>Unix/Linux and Perl/C++ skills required</li>
            <li>Experience with internet-based home office work (TeamViewer or WebEx meetings)</li>
        </ul>
    </p>
    <p>
        <b>Apply here:</b><br>
        Send us your CV to <a href="mailto:service@continiumtech.com">service@continiumtech.com</a>
    </p>
    `;
};

var dialog4 = document.getElementById("electronic-component");
dialog4.onclick = function () {
    dialog.style.display = "block";
    document.body.classList.add("stop-scrolling");
    document.getElementById("dialogTitle").innerHTML = `Electronic Component Verification Engineer`;
    document.getElementById("dialogText").innerHTML = `
    <p>
        <b>Location:</b><br>
        Košice and Bratislava/ Slovakia and Germany/Bavaria
    </p>
    <p>
        <b>Responsibilities:</b>
        <ul>
            <li>Design and Production of Application PCB printed circuit boards/evaluation boards</li>
            <li>Application Tests and Design-In for the customer</li>
            <li>Signal processing of prototype data in MATLAB (FFT spectrum analysis)</li>
            <li>Lab characterization of electronic modules and IC (integrated circuits) products</li>
            <li>Lab management, GPIB programming</li>
        </ul>
    </p>
    <p>
        <b>Qualifications (professionals or graduates):</b>
        <ul>
            <li>University: Bachelor, Master’s, or Ph.D. in Electrical Engineering or Communication Technologies, or Semiconductor Physics.</li>
            <li>Main focus on application, test, and lab measurement of semiconductor products</li>
            <li>Knowledge of Radio Frequency RF processing</li>
            <li>Familiar with Lab evaluation software and Matlab (signal processing, frequency spectral domain)</li>
            <li>Unix/Linux and programming skills required</li>
        </ul>
    </p>
    <p>
        <b>Apply here:</b><br>
        Send us your CV to <a href="mailto:service@continiumtech.com">service@continiumtech.com</a>
    </p>
    `;
};

var dialog5 = document.getElementById("project-manager");
dialog5.onclick = function () {
    dialog.style.display = "block";
    document.body.classList.add("stop-scrolling");
    document.getElementById("dialogTitle").innerHTML = `Project Manager for Electronic product development`;
    document.getElementById("dialogText").innerHTML = `
    <p>
        <b>Location:</b><br>
        Košice and Bratislava/ Slovakia and Germany/Bavaria
    </p>
    <p>
        <b>Responsibilities:</b>
        <ul>
            <li>Communication and cooperation with Continium’s sites and customers</li>
            <li>Tracking project schedule in the design: schematic-ready or layout-ready</li>
            <li>Resource planning and reporting status of the development process</li>
            <li>Organizing reviews of deliverables: circuits, hardware code, mask layout, GDS2 data sets</li>
            <li>Installing scripts and PDK (process development kits) to enable circuit designer’s work</li>
            <li>Negotiation of technical content with customers, partners, and suppliers</li>
            <li>Development of system implementation concepts in the context of customer quote and order processing</li>
            <li>Implementation of requirements analysis and management, project documentation</li>
            <li>Writing technical documentation and application letters for developed electronic products</li>
        </ul>
    </p>
    <p>
        <b>Qualifications (professionals or graduates):</b>
        <ul>
            <li>University degree or technical college education background with analytical thinking</li>
            <li>Basic understanding of electronic product design</li>
            <li>Experience with Microsoft project planner or Gannt tools</li>
            <li>Unix/Linux skills would be beneficial</li>
            <li>Experience with internet-based home office work (TeamViewer or WebEx meetings)</li>
            <li>Knowledge of German or English language on an advanced level</li>
        </ul>
    </p>
    <p>
        <b>Apply here:</b><br>
        Send us your CV to <a href="mailto:service@continiumtech.com">service@continiumtech.com</a>
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
