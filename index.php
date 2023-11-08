<?php
include 'top.php';
?>
<main id="homeMain">
    <figure id="homeDisplay" class="home">
        <div id="framerate">
            <p id="fr"></p>
        </div>
        <img class="logo" src="images/NDLogo.png" alt="Noel Desmarais' Logo">
        <div class="name">
            <h1>NOEL DESMARAIS</h1>
            <h2>Graduate<span class="fullScreen"> - </span><br class="mobile">Full Stack Software Engineer<span class="fullScreen"> - </span><br class="mobile">App Developer</h2>
        </div>
        <div class="gear-icon" onclick="toggleSettingsPopup()"><img src="images/settings.png"></div>

        <!-- Settings popup -->
        <div class="settings-popup" id="settingsPopup">
            <span class="settings-close" onclick="toggleSettingsPopup()">&times;</span>

            <h2>Settings</h2>
            <form>
                <!-- Rainbow Mode radio slider -->
                <div class="toggle-label">
                    <label class="form-switch">
                        <input type="checkbox" id="rainbowToggle" onchange="toggleRainbowMode()">
                        <i></i>
                        Rainbow Mode
                    </label>
                </div>
                <!-- Particle Mode radio slider -->
                <div class="flow-mode radio-toggle">
                    <h3>Mode:</h3>
                    <label>
                        <input type="radio" name="radio" id="flowRadio" onchange="toggleParticleMode()" checked>
                        <span>Flow</span>
                    </label>
                    <label>
                        <input type="radio" name="radio" id="particleRadio" onchange="toggleParticleMode()">
                        <span>Particle</span>
                    </label>
                </div>

                <div class="button-label">
                    <button id="pauseAnimation" onclick="toggleStopAnimation()"><img id="playPause" src="images/pause.png"></button>
                    <button id="clearCanvasButton" onclick="clearCanvas()">Clear Canvas</button>
                </div>
            </form>
            <div class="credit">
                <p>Interactive flow field animation<br>developed by me</p>
            </div>
        </div>


    </figure>
    <div class="content gradient">
        <h2>ABOUT</h2>
        <div class="about">
            <p>/*<br>I am a dedicated and highly motivated recent graduate with a strong programming background and a
                relentless pursuit of writing clean, efficient code. Throughout my journey as a Computer Science & Information
                Systems student at the University of Vermont, I discovered my passion for programming and made the switch from
                Business Administration to Software Engineering.

                <br>
                <br>
                Combining my business analytics knowledge with software engineering, I possess a unique understanding of
                the end-user and how they interact with the code I write. This insight has been invaluable in developing
                impactful projects, including an iOS application for the University of Vermont Medical Center and a website
                for the Schlesinger Global Family Enterprise Case Competition, a prestigious event attracting universities
                from over 27 countries worldwide. In my role as this competition’s Senior Media & Communications Chair, I
                successfully coordinated and executed effective strategies to promote the competition and engage participants.
                This work not only elevated the experience for participants but also contributed to our receiving of an <a href="https://www.ffi.org/awards/international-award/">
                    International Achievement Award for Family Business Research</a> from the Family Firm Institute.

                <br>
                <br>
                In addition to my academic pursuits, I have thrived as an Advanced Programming Teaching Assistant,
                honing my skills in explaining complex concepts and debugging code. To reinforce my learning, I embarked on
                personal projects such as creating a platform for renters to review apartments and hold landlords accountable
                in Burlington's captive rental market. I am a constant learner and am continuously challenging myself. My
                current challenge that I’ve been working on is creating a home monitoring system by using Arduino’s,
                microcontrollers, sensors, and servos interconnected through Bluetooth and WiFi.
                <br>
                <br>
                While actively maintaining two jobs and juggling my college commitments, I have remained driven and focused.
                I am now eager to leverage my diverse experiences and recent degree and embark on a rewarding career in the
                Software Engineering field. For a detailed overview of my projects, please continue reading below.
                <br>
                */
            </p>
            <div class="imageDiv">
                <img src="images/npd_lego.JPG">
                <p>8-Year-Old me (left) setting up our robot at the NH FIRST LEGO Robotics competition, my first introduction to engineering</p>
            </div>

        </div>

    </div>
    <div class="content project-section">
        <h2>PROJECTS</h2>
        <h3>Click on a project to expand</h3>
        <div class="popup">
            <div class="popup-content">
            </div>
            <span class="popup-close">&times;</span>
        </div>
        <div class="projects">
            <?php
            $sql = "SELECT fldName, fldDescription, fldLanguages, fldTools, fldDate, fldCodeLink, fldFinishedLink, fldCaption FROM tblProjects";
            $projects = $thisDBReader->select($sql);
            foreach ($projects as $project) {
                print '<div class="project"><h3>' . $project['fldName'] . '</h3><div class="languages">';
                $languages = explode(",", $project['fldLanguages']);
                foreach ($languages as $language) {
                    print '<p class="language" id="' . $language . '">' . $language . '</p>';
                }
                // if (!is_null($project['fldTools'])) {
                //     $tools = explode(",", $project['fldTools']);
                //     $toolsText = '';
                //     foreach ($tools as $tool) {
                //         $toolsText .= $tool . ", ";
                //     }
                //     $toolsText = rtrim($toolsText, ", ");
                //     print '</div><p class="tools">OTHER SKILLS: ' . $toolsText . '</p>';
                // } 
                // else {
                //     print '</div>';
                // }
                print '</div><p class="tools">' . $project['fldCaption'] . '</p>';

                print '<div class="descriptionDiv"><p class="description">' . $project['fldDescription'] . '</p><div class="projectLinks">';
                if (!is_null($project['fldCodeLink'])) {
                    print '<a class="projectLink codeLink" href="' . $project['fldCodeLink'] . '">&lt;/View Code&gt;</a>';
                }
                if (!is_null($project['fldFinishedLink'])) {
                    print '<a class="projectLink" href="' . $project['fldFinishedLink'] . '">View Project</a>';
                }
                print '</div></div></div>';
            }


            ?>
        </div>
    </div>
    <div class="content contact">
        <h2>CONTACT</h2>
        <h3>Feel free to reach out for more information</h3>
        <div class="contact-links">
            <a href="https://www.linkedin.com/in/noeldesmarais/" target="_blank">
                <img src="images/linkedin-logo.png" alt="LinkedIn.com">
            </a>
            <a href="https://github.com/npd29" target="_blank">
                <img src="images/github-logo.png" alt="Github.com">
            </a>
            <a class="resume" href="resume10.2.pdf" target="_blank">View Resume</a>
        </div>
    </div>

    <?php
    include 'footer.php'
    ?>

</main>
</body>
<script src="constants.js"></script>
<script src="utilities.js"></script>
<script src="particle.js"></script>
<script src="flowfield.js"></script>

</html>