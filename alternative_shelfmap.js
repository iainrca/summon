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
  rootScope.$on('apiSuccess', (scope) => setTimeout(AppendToHoldings, 3000))
});


/*function to append text to records where the RTA Location Code requires users to do something*/

 function AppendToHoldings() {


	 
          $('div.availabilityInfo').each(function () {
          console.log($(this).text() ); 
		  
	  var bibid = $(this).closest($('div.documentSummary')).attr('id').replace(/FETCH-rca_catalog_u/g,'').replace(/.$/,'');	  	  	  	  
          //var invalidSMLocs=["SPECCOLL","CRL","AB","ARC","THESES","STACK","FLTV","OFFSITE","PER_NONC","PER_RES","CAT","IP","JR","ONORD","EBOOKS","On","ONLOAN","HOLDS","MISSING"];
          // if you don't want a link for these which will go to the enq desk, add them to invalidSMLocs array above. Otherwise ensure all below are set up in SM db
          //["THESES","STACK","FLTV","OFFSITE","PER_NONC","PER_RES","CAT","IP","JR","ONORD"]
		  var validSMLocs=["ONSHELF","REFERENCE","QR","PAMPHLET","PER_CURR","OVERSIZE","EAP","DYSLEXIA","FUELRCA","CRLCC"];
		  var validSPLocs=["CRL","SPECCOLL","ARC","AB","OFFSITE"];
		  var validEQLocs=["FLTV"<"PER_NONC","PER_RES","THESES","STACK","STORE","JR","CAT","IP"];
          var LocArr = $(this).text().split(',');          
          var Loc = LocArr[0].replace(/[\s\n]+/g,'');
                   //console.log(Loc);
	  if(validSMLocs.indexOf(Loc) !== -1) {
	     // get bib id and append shelfmap url/link
                  $( "<div id='shelfmap'><a href='https://app.shelfmap.co.uk/fp/fp?icode=44RCA&id=" + bibid + "' target='_blank' class='ShelfMap_anchor' title='Show item on ShelfMap'><img src='https://iainrca.github.io/summon/v2.svg' alt='ShelMap drop pin' height = '75px' width='75px'/>Show Book on Map</a></div></br>").insertAfter( $(this) );
               }
	  if(validSPLocs.indexOf(Loc) !== -1) {
			$( "<div id='specialcol'><em>Item in Special Collections - access by <a href='https://rca.libguides.com/c.php?g=695876&p=4994815&preview=f10de9574bdcdbccc17267f2207bfdb8' target='_blank'>appointment</a></em></div></br>" ).insertAfter( $(this) );        
  	  } 
          //if (Loc == 'CRL') {
              //console.log("Special Collections Appointment needed");
//$( "<div id='specialcol'><em>Item in Special Collections - access by <a href='https://rca.libguides.com/c.php?g=695876&p=4994815&preview=f10de9574bdcdbccc17267f2207bfdb8' target='_blank'>appointment</a></em></div></br>" ).insertAfter( $(this) );        
//  	  } 
//         else if (Loc == 'SPECCOLL') {
//$( "<div id='specialcol'><em>Item in Special Collections - access by <a href='https://rca.libguides.com/c.php?g=695876&p=4994815&preview=f10de9574bdcdbccc17267f2207bfdb8' target='_blank'>appointment</a></em></div></br>" ).insertAfter( $(this) );
//          }
//         else if (Loc == 'ARC') {
//$( "<div id='specialcol'><em>Item in Special Collections - access by <a href='https://rca.libguides.com/c.php?g=695876&p=4994815&preview=f10de9574bdcdbccc17267f2207bfdb8' target='_blank'>appointment</a></em></div></br>" ).insertAfter( $(this) );
//          }
//         else if (Loc == 'AB') {
//$( "<div id='specialcol'><em>Item in Special Collections - access by <a href='https://rca.libguides.com/c.php?g=695876&p=4994815&preview=f10de9574bdcdbccc17267f2207bfdb8' target='_blank'>appointment</a></em></div></br>" ).insertAfter( $(this) );
//          }
//        else if (Loc == 'OFFSITE') {
//$( "<div id='specialcol'><em>Item in Special Collections - access by <a href='https://rca.libguides.com/c.php?g=695876&p=4994815&preview=f10de9574bdcdbccc17267f2207bfdb8' target='_blank'>appointment</a></em></div></br>" ).insertAfter( $(this) );
//          } 
	if(validEQLocs.indexOf(Loc) !== -1) {
			$( "<div id='enqdesk'><em>Ask at Library Desk</em></br></div>" ).insertAfter( $(this) );        
  	  } 
//          else if (Loc == 'FLTV') {
//              $( "<div id='specialcol'><em>Ask at Library Desk</em></br></div>" ).insertAfter( $(this) );
//          }
//          else if (Loc == 'PER_NONC') {
//              $( "<div id='specialcol'><em>Ask at Library Desk</em></br></div>" ).insertAfter( $(this) );
//          }
//          else if (Loc == 'PER_RES') {
//              $( "<div id='specialcol'><em>Ask at Library Desk</em></br></div>" ).insertAfter( $(this) );
//          }
//           else if (Loc == 'THESES') {
//              $( "<div id='specialcol'><em>Ask at Library Desk</em></br></div>" ).insertAfter( $(this) );
//          }
//           else if (Loc == 'STACK') {
//              $( "<div id='specialcol'><em>Ask at Library Desk</em></br></div>" ).insertAfter( $(this) );
//          }     
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
