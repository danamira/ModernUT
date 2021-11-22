<p align="center">
	<img src="https://raw.githubusercontent.com/devdana/ModernUT/main/Intro.png"/>
</p>
</b>
<h2>What is ModernUT?</h2>
ModernUT is a chrome extension which applies a modern-looking theme and style to the websites of Univeristy Of Tehran.
<h2>Quick installation</h2>
<p>Follow the steps below to install the extension without building the source code from scratch.</p>
<ol>
    <li>Download the pre-built version of the extension by clicking <a href="https://github.com/devdana/ModernUT/releases/download/Builds/ModernUT-Beta.zip">Here</a>.</li>
    <li>Extract the ZIP file in your computer.</li>
    <li>Open Extensions settings in your Chrome-based browser.</li>
	<li>Enable Developer Mode.</li>
	<li>Select `Load unpacked` from the options available at top of the extesnions page.</li>
	<li>Select the `dist` folder inside the direcotry which the source code you extracted earlier is located in.</li>
</ol>
<h2>How to build it?</h2>
Before starting, make sure you have npm installed on your machine. This extension uses Laravel Mix and Webpack to bundle resources and compile the stylesheets.
<ol>
    <li>Clone the repository and switch to the main direcotry.</li>
    <li>Run `npm update` to install the dependencies needed.</li>
    <li>After the installation is over, run `npx mix` in order to build the project into `dist` direcotry.</li>
    <li>Open Extensions settings in your Chrome-based browser.</li>
	<li>Enable Developer Mode.</li>
	<li>Select `Load unpacked` from the options available at top of the extesnions page.</li>
	<li>Select the `dist` folder inside the direcotry which the source code you cloned/downloaded earlier is located in.</li>
</ol>
Extension works fine with most of the Chrome-based browsers such as Brave or Microsoft Edge.
<h2>How to contribute?</h2>
<p>Since the project is in its early stages, all contributions would be super helpful. Let me know if you discover that any of the applied styles or scripts cause problems or disruptions in the functionality of websites. If you have issues installing the extension or the extension doesn't seem to work after installation please report it in the issues section. Also if you're familiar with CSS and JavaScript and want to make some changes to the extensions send a merge request. I will definitely consider merging your code into the project.</p>
<h2>Acknowledgments</h2>
<p>This extension used Vazir to make texts on affected websites look better. Vazir is a free and well-adjusted Iranian font packaged designed by Saber RastiKerdar. I encourage you to check their <a href="https://rastikerdar.github.io/vazir-font/">official page</a> for more information.