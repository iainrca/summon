  // Get HTML head element 
        var head = document.getElementsByTagName('head')[0];  
  
        // Create new link Element 
        var link = document.createElement('link'); 
  
        // set the attributes for link element  
        link.rel = 'stylesheet';  
      
        link.type = 'text/css'; 
      
        link.href = 'https://iainrca.github.io/summon/summon-preview.css';  
  
        // Append link element to HTML head 
        document.head.appendChild(link);

/* code to run the following function only when the rta results are back*/

$(document).ready(function() {
let rootScope = angular.element('html').scope().$root
  rootScope.$on('apiSuccess', (scope) => setTimeout(AppendToHoldings, 2000))
});


/*function to append text to records where the RTA Location Code requires users to do something*/

 function AppendToHoldings() {

	  console.log("bibid");	  
	  console.log($('div.documentSummary'));
 	  console.log($('div.documentSummary').id);
	 
          $('div.availabilityInfo').each(function () {
          //console.log($(this).text() ); 
          var LocArr = $(this).text().split(',');          
          var Loc = LocArr[0].replace(/[\s\n]+/g,'');
                   //console.log(Loc);
          if (Loc == 'CRL') {
              //console.log("Special Collections Appointment needed");
              $( "<div id='specialcol'><em>Access by appointment: please email <a href='mailto:special-collections@rca.ac.uk' target='_blank'>special-collections@rca.ac.uk</a> to arrange</em></div></br>" ).insertAfter( $(this) );
          } 
         else if (Loc == 'SPECCOLL') {
              $( "<div id='specialcol'><em>Access by appointment: please email <a href='mailto:special-collections@rca.ac.uk' target='_blank'>special-collections@rca.ac.uk</a> to arrange</em></div>" ).insertAfter( $(this) );

          }
         else if (Loc == 'ARC') {
              $( "<div id='specialcol'><em>Access by appointment: please email <a href='mailto:special-collections@rca.ac.uk' target='_blank'>special-collections@rca.ac.uk</a> to arrange</em></div>" ).insertAfter( $(this) );

          }
         else if (Loc == 'AB') {
              $( "<div id='specialcol'><em>Access by appointment: please email <a href='mailto:special-collections@rca.ac.uk' target='_blank'>special-collections@rca.ac.uk</a> to arrange</em></div>" ).insertAfter( $(this) );
          }
         else if (Loc == 'OFFSITE') {
              $( "<div id='specialcol'><em>Access by appointment: please email <a href='mailto:special-collections@rca.ac.uk' target='_blank'>special-collections@rca.ac.uk</a> to arrange</em></div>" ).insertAfter( $(this) );

          }                   
          else if (Loc == 'FLTV') {
              $( "<div id='specialcol'><em>Ask at Library Desk</em></br></div>" ).insertAfter( $(this) );
          }
          else if (Loc == 'PER_NONC') {
              $( "<div id='specialcol'><em>Ask at Library Desk</em></br></div>" ).insertAfter( $(this) );
          }
          else if (Loc == 'PER_RES') {
              $( "<div id='specialcol'><em>Ask at Library Desk</em></br></div>" ).insertAfter( $(this) );
          }
           else if (Loc == 'THESES') {
              $( "<div id='specialcol'><em>Ask at Library Desk</em></br></div>" ).insertAfter( $(this) );
          }
           else if (Loc == 'STACK') {
              $( "<div id='specialcol'><em>Ask at Library Desk</em></br></div>" ).insertAfter( $(this) );
          }     
            else if (Loc == 'PER_CURR') {
              $( "<div id='specialcol'><em>Latest Issue in Journals Room</em></br></div>" ).insertAfter( $(this) );
	    } 
   });
 }

 

/* Adding additional Custom Links to Summon.*/

angular.module('summonApp')
.run(['configService', function (config) {
    config.data.links.custom1 = {
        href: "https://rca.libguides.com/az.php",
        label: "Online Resources A-Z"
     }
    config.data.links.custom2 = {
        href: "http://qh7vn5wm4q.search.serialssolutions.com/",
        label: "E-Journals A-Z"
     }
     config.data.links.custom3 = {
         href: "https://researchonline.rca.ac.uk/",
         label: "RCA Research Online"
     }
     config.data.links.custom4 = {
         href: "https://moodle.rca.ac.uk/course/view.php?id=9",
         label: "Moodle"
     }
     config.data.links.custom5 = {
         href: "https://rca.libguides.com/c.php?g=688796&p=4929377&preview=95943e5b520b75b578fafbc6ff01919f",
         label: "Suggest a Book"
     }
      config.data.links.custom6 = {
         href: "https://rca.libguides.com/c.php?g=688796&p=4929379&preview=95943e5b520b75b578fafbc6ff01919f",
         label: "Inter-library Loans"
     }
       config.data.links.custom7 = {
         href: "https://library.rca.ac.uk/client/en_GB/summon/search/patronlogin/http:$002f$002flibrary.rca.ac.uk$002fclient$002fen_GB$002fsummon$002fsearch$002faccount$002f1$003f",
         label: "My Account"
     }        
         
 }]);
