         // Get HTML head element 
        var head = document.getElementsByTagName('head')[0];  
  
        // Create new link Element 
        var link = document.createElement('link'); 
  
        // set the attributes for link element  
        link.rel = 'stylesheet';  
      
        link.type = 'text/css'; 
      
        link.href = 'https://iainrca.github.io/summon/libsearch.css';  
  
        // Append link element to HTML head 
        document.head.appendChild(link);

/* code to run the following function only when the rta results are back*/

$(document).ready(function() {
let rootScope = angular.element('html').scope().$root
  rootScope.$on('apiSuccess', (scope) => setTimeout(AppendToHoldings, 2000))
});

/*function to append text to records where the RTA Location Code requires users to do something*/

 function AppendToHoldings() {
          
          $('div.availabilityInfo').each(function () {
          //console.log($(this).text() ); 
          var LocArr = $(this).text().split(',');          
          var Loc = LocArr[0].replace(/[\s\n]+/g,'');
                   //console.log(Loc);
          if (Loc == 'CRL') {
              console.log("Special Collections Appointment needed");
              $( "<em>Contact <a href='https://www.rca.ac.uk/more/special-collections/access-location-and-appointments/' target='_blank'>Archives and Special Collections</a> to book an appointment</em></br>" ).insertBefore( $(this) );
          } 
         else if (Loc == 'SPECCOLL') {
              $( "<em>Contact <a href='https://www.rca.ac.uk/more/special-collections/access-location-and-appointments/' target='_blank'>Archives and Special Collections</a> to book an appointment</em></br>" ).insertBefore( $(this) );

          }
         else if (Loc == 'ARC') {
              $( "<em>Contact <a href='https://www.rca.ac.uk/more/special-collections/access-location-and-appointments/' target='_blank'>Archives and Special Collections</a> to book an appointment</em></br>" ).insertBefore( $(this) );

          }
         else if (Loc == 'AB') {
              $( "<em>Contact <a href='https://www.rca.ac.uk/more/special-collections/access-location-and-appointments/' target='_blank'>Archives and Special Collections</a> to book an appointment</em></br>" ).insertBefore( $(this) );

          }
         else if (Loc == 'OFFSITE') {
              $( "<em>Contact <a href='https://www.rca.ac.uk/more/special-collections/access-location-and-appointments/' target='_blank'>Archives and Special Collections</a> to book an appointment</em></br>" ).insertBefore( $(this) );

          }                   
          else if (Loc == 'FLTV') {
              $( "<em>Ask at Library Desk</em></br>" ).insertAfter( $(this) );
          }
          else if (Loc == 'PER_NONC') {
              $( "<em>Ask at Library Desk</em></br>" ).insertAfter( $(this) );
          }
          else if (Loc == 'PER_RES') {
              $( "<em>Ask at Library Desk</em></br>" ).insertAfter( $(this) );
          }
           else if (Loc == 'THESES') {
              $( "<em>Ask at Library Desk</em></br>" ).insertAfter( $(this) );
          }
           else if (Loc == 'STACK') {
              $( "<em>Ask at Library Desk</em></br>" ).insertAfter( $(this) );
          }                  
   });
 }

/* Adding additional Cusom Links to Summon. EJournal A-Z and RCA ResearchOnline */

angular.module('summonApp')
.run(['configService', function (config) {
    config.data.links.custom1 = {
        href: "https://rca.libguides.com/az.php",
        label: "Online Resources"
     }
    config.data.links.custom2 = {
        href: "http://qh7vn5wm4q.search.serialssolutions.com/",
        label: "EJournal Finder"
     }
     config.data.links.custom3 = {
         href: "https://researchonline.rca.ac.uk/",
         label: "RCA ResearchOnline"
     }
     config.data.links.custom4 = {
         href: "https://moodle.rca.ac.uk/",
         label: "Moodle"
     }
 }]);

/* An attempt to change Single Journals to Publisher Site to make the experience for end user better */

$(document).ready(function() {
let rootScope = angular.element('html').scope().$root
  rootScope.$on('apiSuccess', (scope) => setTimeout(AmendToPublisher, 2000))
});

 function AmendToPublisher() {
         $('a.results-dbRef').each(function () {
          console.log($(this).text() ); 
          var LocArr = $(this).text().split(',');          
          var Loc = LocArr[0].replace(/[\s\n]+/g,'');
          console.log(Loc);
          if (Loc == 'SingleJournals') {
              console.log("Change to Publishers Site");
              $(this).text("Publishers Site");
          } 
		  });
 }


//$('.customLinks li:contains(Help)').hide();
//$('.customLinks li:contains(Feedback)').hide();
