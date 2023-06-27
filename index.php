<?php
include 'top.php';
?>
<main id="homeMain">

    <figure id="homeDisplay" class="home">
        <img class="logo" src="images/NDLogo.png" alt="Noel Desmarais' Logo">
        <div class="name">
            <h1>NOEL DESMARAIS</h1>
            <h2>Graduate<span class="fullScreen"> - </span><br class="mobile">Full Stack Software Engineer<span class="fullScreen"> - </span><br class="mobile">App Developer</h2>
        </div>
        <div class="arrow arrow-one"></div>
        <div class="arrow arrow-two"></div>

    </figure>
    <div class="content gradient">
        <h2>ABOUT</h2>
        <div class="about">
            <p>/*<br>I am a dedicated and highly motivated recent graduate with a strong programming background and a
                relentless pursuit of writing clean, efficient code. Throughout my journey as a Computer Science & Information
                Systems student at the University of Vermont, I discovered my passion for programming and made the switch from
                Business Administration to pursue my true calling.

                <br>
                <br>
                Combining my business analytics knowledge with software engineering, I possess a unique understanding of
                the end-user and how they interact with the code I write. This insight has been invaluable in developing
                impactful projects, including an iOS application for the University of Vermont Medical Center and a website
                for the Schlesinger Global Family Enterprise Case Competition, a prestigious event attracting universities
                from over 27 countries worldwide. In my role as this competition’s Senior Media & Communications Chair, I
                successfully coordinated and executed effective strategies to promote the competition and engage participants.

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
                Software Engineering field. For a detailed overview of my projects, please continue reading below."
                <br>
                */
            </p>
            <div class="imageDiv">
                <img src="images/npd2.jpg">
                <p>Me writing some really impressive code (probably)</p>
            </div>

        </div>
        
    </div>
    <div class="content project-section">
        <h2>PROJECTS</h2>
        <div class="popup">
            <div class="popup-content">
            </div>
            <span class="popup-close">&times;</span>
        </div>
        <div class="projects"><?php
            $sql="SELECT fldName, fldDescription, fldLanguages, fldTools, fldDate, fldCodeLink, fldFinishedLink, fldImageAddress FROM tblProjects";
            $projects = $thisDBReader->select($sql);
        foreach ($projects as $project){
            print '<div class="project"><h3>'.$project['fldName'].'</h3><div class="languages">';
            $languages = explode (",", $project['fldLanguages']);
            foreach ($languages as $language){
                print '<p class="language" id="'.$language.'">'. $language. '</p>';
            }
            if (!is_null($project['fldTools'])){
                $tools = explode (",", $project['fldTools']);
                $toolsText ='';
                foreach ($tools as $tool) {
                    $toolsText .= $tool .", ";
                }
                $toolsText = rtrim($toolsText, ", ");
                print '</div><p class="tools">ALSO USED: '.$toolsText. '</p>';
            }else{
                print '</div>';
            }
            print'<div class="descriptionDiv"><p class="description">'.$project['fldDescription'].'</p><div class="projectLinks">';
            if (!is_null($project['fldCodeLink'])){
                print '<a class="projectLink codeLink" href="'.$project['fldCodeLink'].'">&lt;/View Code&gt;</a>';
            }
            if (!is_null($project['fldFinishedLink'])){
                print '<a class="projectLink" href="'.$project['fldFinishedLink'].'">View Project</a>';
            }
            print '</div></div></div>';

        }


            ?>
        </div>
    </div>

    <div class="overlay"></div>


    <?php
    include 'footer.php'
    ?>

</main>
</body>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        var projects = document.querySelectorAll('.project');
        var popup = document.querySelector('.popup');
        var popupContent = document.querySelector('.popup-content');
        var popupClose = document.querySelector('.popup-close');
        var projectSection = document.querySelector('.project-section');


        projects.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                var project = this.closest('.project');
                popupContent.innerHTML = project.innerHTML;
                popup.classList.toggle('show');
                projectSection.classList.toggle('show-popup');

            });
        });

        popupClose.addEventListener('click', function() {
            popup.classList.remove('show');
            projectSection.classList.remove('show-popup');
        });
    });
</script>

</html>