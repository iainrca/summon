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

         console.log("Enters Append");
	 console.log($('div.availabilityInfo').length);
	 console.log($('div.availabilityInfo'));
         //check div.availabilityInfo exists before proceeding to check if elements need adding
	 var checkExist = setInterval(function() {
         if ($('div.availabilityInfo').length) {
            console.log("Exists!");
            clearInterval(checkExist);
         }
         else {
            console.log("not present yet");
         }
         }, 100); // check every 100ms
		 
	  console.log("cleared");	 
	 
          $('div.availabilityInfo').each(function () {
          console.log($(this).text() ); 
		  
		  var bibid = $(this).closest($('div.documentSummary')).attr('id').replace(/FETCH-rca_catalog_u/g,'').replace(/.$/,'');	  	  	  	  
		  var validSMLocs=["ONSHELF","REFERENCE","QR","PAMPHLET","PER_CURR","OVERSIZE","EAP","DYSLEXIA","FUELRCA","CRLCC"];
		  var validSPLocs=["CRL","SPECCOLL","ARC","AB","OFFSITE"];
		  var validEQLocs=["FLTV","PER_NONC","PER_RES","THESES","STACK","STORE","JR","CATALOGING","IP","BIN","BOUT"];
          var LocArr = $(this).text().split(',');          
          var Loc = LocArr[0].replace(/[\s\n]+/g,'');
                   //console.log(Loc);
			if(validSMLocs.indexOf(Loc) !== -1) {
	     // get bib id and append shelfmap url/link				
		  console.log($(this).siblings('div#shelfmap'));		  				
		  if($(this).siblings('div#shelfmap').length) {
		     // skip as link already exists
		  }
		  else {
                     $( "<div id='shelfmap'><a href='https://app.shelfmap.co.uk/fp/fp?icode=44RCA&id=" + bibid + "' target='_blank' class='ShelfMap_anchor' title='Show item on ShelfMap'><img src='https://iainrca.github.io/summon/v2.svg' alt='ShelMap drop pin' height = '75px' width='75px'/>View Shelf Location</a></div></br>").insertAfter( $(this) );		
		  }			  
               }
		  
			if(validSPLocs.indexOf(Loc) !== -1) {
		// add link to special collections booking form
			 console.log($(this).siblings('div#specialcol'));		  				
		  if($(this).siblings('div#specialcol').length) {
		     // skip as link already exists
		  }
		  else {	
				  // $( "<div id='specialcol'><em>Item in Special Collections - access by <a href='https://rca.libguides.com/c.php?g=690477&p=4946847&preview=c35121341496a0c2f17dc536ffd730d5' target='_blank'>appointment</a></em></div></br>" ).insertAfter( $(this) );        
				 // $( "<div id='specialcol'><em>Access by appointment: please email <a href='mailto:special-collections@rca.ac.uk' target='_blank'>special-collections@rca.ac.uk</a> to arrange</em></div></br>" ).insertAfter( $(this) );  
			  	 $( $(this) ).append( "<div id='specialcol'><em>Item in Special Collections - access by <a href='https://rca.libguides.com/c.php?g=690477&p=4946847&preview=c35121341496a0c2f17dc536ffd730d5' target='_blank'>appointment</a></em></div></br>" );
			} 
			}
			if(validEQLocs.indexOf(Loc) !== -1) {
		// add link to ask at library desk
				 console.log($(this).siblings('div#enqdesk'));		  				
		  if($(this).siblings('div#enqdesk').length) {
		     // skip as link already exists
		  }
		  else {
				   $( "<div id='enqdesk'><em>Ask at Library Desk</em></br></div>" ).insertAfter( $(this) );        
			   } 
			}

            else if (Loc == 'PER_CURR') {
		// add link to point to journals room - is this necessary now with shelfmap?
		     console.log($(this).siblings('div#currjour'));		  				
		  if($(this).siblings('div#currjour').length) {
		     // skip as link already exists
		  }
		  else {
				   $( "<div id='currjour'><em>Latest Issue in Journals Room</em></br></div>" ).insertAfter( $(this) );
	    } 
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
        config.data.links.custom8 = {
         href: "https://rca.libguides.com/alumniaccess",
         label: "External Visitors"
     }                
 }]);
