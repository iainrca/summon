/* An attempt to change Single Journals to Publisher Site to make the experience for end user better */

$(document).ready(function() {
let rootScope = angular.element('html').scope().$root
  rootScope.$on('apiSuccess', (scope) => setTimeout(AmendToPublisher, 2000))
});

 function AmendToPublisher() {
         $('a.results-dbRef').each(function () {
          console.log($(this).text() ); 
          var DbArr = $(this).text().split(',');          
          var DbType = DbArr[0].replace(/[\s\n]+/g,'');
          console.log(DbType);
          if (DbType == 'SingleJournals') {
              console.log("Change to Publishers Site");
              $(this).text("Publishers Site");
          } 
		  });
 }
