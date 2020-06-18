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


$(document).ready(function() {
let rootScope = angular.element('html').scope().$root
  rootScope.$on('apiSuccess', (scope) => setTimeout(AppendToHoldings, 1000))
});

 function AppendToHoldings() {
          
          $('div.availabilityInfo').each(function () {
          //console.log($(this).text() ); 
          var LocArr = $(this).text().split(',');          
          var Loc = LocArr[0].replace(/[\s\n]+/g,'');
          if (Loc == 'CRL') {
              console.log("CRL found");
              $( "<em>Some text</em></br>" ).insertBefore( $(this) );
          }                           
   });
 }
