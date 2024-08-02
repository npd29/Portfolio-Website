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
            <h2>Full Stack Software Developer</h2>
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
            <p>/*<br>I am a passionate and versatile software engineer with a degree in Computer Science & Information Systems from the University of Vermont. I have a strong foundation in C++, Java, Python, which I gained while working as an Advanced Programming Teaching Assistant. There, I also taught and assisted students with the implementation and understanding of data structures and algorithms. I am currently work at Trinnex, a CDM Smith subsidiary as a software developer. There I have been working on creating complex web-based applications using Typescript, React, and implementing Azure functions.

                <br>
                <br>
                In addition to my professional work, I have been involved in academic and personal projects that showcase my creativity and problem-solving skills. One of my most recent projects is an LED matrix inspired by the <a href="https://tidbyt.com">TidByt</a> using Raspberry Pi Pico and CircuitPython. I am in the process of creating my own LED Matrix layout library in C++ to have more control over memory management and speed.
                <br>
                <br>
                My passion lies in AI technologies and their applications in various domains. In my free time, I enjoy working on projects and online courses pertaining to the subject, my latest being a Snake AI using reinforcement learning. These projects help me apply my theoretical knowledge and skills to practical challenges. I am also in the process of obtaining my AWS Certified Solutions Architect Associate Certification to expand my knowledge on cloud computing and AI.                
<br><br>
I am a lifelong learner, curious by nature, and a self-starter, always looking for new challenges and opportunities to grow. To learn more about my projects, please continue reading below.
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