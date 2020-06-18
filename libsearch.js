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



/*
$('div.availabilityRta a').each(function () {
   console.log($(this).text() );  
   var LocArr = $(this).text().split(',');
         console.log(LocArr);
   var Loc = LocArr[0];
   if (Loc == 'CRL') {
      console.log("CRL found");
 $( "<em>Some text</em></br>" ).insertBefore( $(this) );
   }
});

*/

/*
console.log("End of js file");
$(document).ready(function() {
         console.log("inside ready");
    //$('div.availabilityRta').on('load', function() {
    console.log($('div.summary'));
    $('div.shortSummary').on('load', function() {                
             console.log("div loaded");
       if($('div.availabilities').length > 0) {
     console.log("RTA loaded");
}
    });
});
*/

$(document).ready(function() {
let rootScope = angular.element('html').scope().$root
  rootScope.$on('apiSuccess', (scope) => setTimeout(AppendToHoldings, 1000))
});

 function AppendToHoldings() {
          
          //$('div.availabilityRta').each(function () {
          $('div.availabilityInfo').each(function () {
          console.log($(this).text() ); 
          var LocArr = $(this).text().split(',');
          console.log(LocArr);
          var Loc = LocArr[0];
          if (Loc == 'CRL') {
              console.log("CRL found");
              $( "<em>Some text</em></br>" ).insertBefore( $(this) );
          }                           
   });
 }
