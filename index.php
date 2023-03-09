<?php
include 'top.php';
?>
<main id="homeMain">
    <figure id="homeDisplay" class="home">
        <img class="logo" src="images/NDLogo.png" alt="Noel Desmarais' Logo">
        <div class="name">
            <h1>NOEL DESMARAIS</h1>
            <h2>Student<span class="fullScreen"> - </span><br class="mobile">Full Stack Software Engineer<span class="fullScreen"> - </span><br class="mobile">App Developer</h2>
        </div>
        <div class="arrow arrow-one"></div>
        <div class="arrow arrow-two"></div>

    </figure>
    <div class="content gradient">
        <h2>ABOUT</h2>
        <div class="about">
            <p>/*<br>I am a Computer Science & Information Systems student at the University of Vermont with a strong programming background and a passion for writing clean, efficient code.
                I entered college as a Business Administration major concentrating in Business Analytics, after taking an introductory
                programming class, I discovered a passion for programming and switched my major. The business side of my
                degree has helped me to understand the end-user and how they might interact with code I write. I have used
                this knowledge to help develop products such as an iOS application for the University of Vermont Medical Center
                and a website for the Schlesinger Global Family Enterprise Case Competition, an event that has attracted
                universities from over 27 countries around the world, for which I served as the Senior Media & Communications Chair.
                <br>
                <br>
                I've gained valuable skills while serving as an Advanced Programming Teaching Assistant, such as explaining
                complex concepts, and debugging others' code. I've used personal projects to support my learning such as developing
                a website that serves as a platform for renters to review their apartments and landlords to hold landlords
                accountable in Burlington's captive rental market. Other ongoing personal projects include automating processes around
                my house using Arduinos and microcontrollers in conjunction with a series of sensors and servos all connected
                using Bluetooth 4.0 and WiFi.
                <br>
                <br>
                Between these projects and maintaining two jobs throughout college, I have kept myself busy and am excited to start a career
                in the Software Engineering field. For specifics about projects I have worked on keep reading below.
                <br>
                */
            </p>
            <div class="imageDiv">
                <img src="images/npd2.jpg">
                <p>Me writing some really impressive code (probably)</p>
            </div>

        </div>
        
    </div>
    <div class="content">
        <h2>PROJECTS</h2>
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
            print'<div class="descriptionDiv"><p class="description">'.$project['fldDescription'].'</p></div><div class="projectLinks">';
            if (!is_null($project['fldCodeLink'])){
                print '<a class="projectLink codeLink" href="'.$project['fldCodeLink'].'">&lt;/View Code&gt;</a>';
            }
            if (!is_null($project['fldFinishedLink'])){
                print '<a class="projectLink" href="'.$project['fldFinishedLink'].'">View Project</a>';
            }
            print '</div></div>';

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
</html>