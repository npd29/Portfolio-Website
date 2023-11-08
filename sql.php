<?php
include 'top.php';
?>
<article style="margin: 10vh 5vw">
<p>
    The landlord data is split off into a separate table. This is so down the line more info can be added about each landlord.
</p>
<p>From signUp.php this is run after a user presses submit</p>
<code>
INSERT INTO tblUsers SET fldFirst=?, fldLast=?, fldEmail=?, fldGender=?, pmkUsername=?, fldPassword=? ON DUPLICATE KEY UPDATE fldFirst=?, fldLast=?, fldEmail=?, fldGender=?, fldPassword=?
</code>

<p>From display.php this joins data from the users, landlords, and apartments tables to display a table full of data</p>
<code>
    SELECT pmkAptId, fldBeds, fldBaths, fldAddress, fldCity, fldState, tblLandlords.fldLandlordName,
    tblUsers.fldFirst, tblUsers.fldLast FROM tblApartments FULL JOIN tblLandlords ON fkLandlordId=tblLandlords.pmkLandlordId
    JOIN tblUsers ON fkUsername=tblUsers.pmkUsername</code>


    <p>From mySpace.php this joins data from the landlords and apartments tables to display a table with the landlord's name</p>
    <code>
        SELECT pmkAptId, fldAddress, fldCity, fldState, tblLandlords.fldLandlordName
        FROM tblApartments FULL JOIN tblLandlords ON fkLandlordId=tblLandlords.pmkLandlordId AND fkUsername='$username'</code>
    <p>From manager/delete.php, this page uses a switch statement so only managers can delete certain types of data. It is
        consolidated into one page and figures out what information to delete with 2 get requests</p>
    <code>
        switch ($type){<br>
        case 'apartment':<br>
        $thisDBWriter->select("DELETE FROM tblApartments WHERE pmkAptId='".$id."'");<br>
        case 'landlord':<br>
        $thisDBWriter->select("DELETE FROM tblLandlords WHERE pmkLandlordId='".$id."'");<br>
        $thisDBWriter->select("DELETE FROM tblApartments WHERE fkLandlordId='".$id."'");<br>
        case 'user':<br>
        $thisDBWriter->select("DELETE FROM tblUsers WHERE pmkUsername='".$id."'");<br>
        $thisDBWriter->select("DELETE FROM tblApartments WHERE fkUsername='".$id."'");</code>


    <p>From form-content.php, this code inserts the apartment data into the apartment table</p>
    <code>
        INSERT INTO tblApartments SET pmkAptId=?, fkUsername=?, fldAddress=?, fldCity=?, fldState=?,
        fkLandlordId=?, fldBeds=?, fldBaths=?, fldRecommend=?, fldHousingType=?
        ON DUPLICATE KEY UPDATE fkUsername=?, fldAddress=?, fldCity=?, fldState=?,
        fkLandlordId=?, fldBeds=?, fldBaths=?, fldRecommend=?, fldHousingType=?'
        </code>


</article>
<?php
include 'footer.php';
?>