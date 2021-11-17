var startDate = new Date("November 01, 2021 00:01");
var endDate = new Date("November 17, 2021 23:59");

var todayDate = new Date();

if (todayDate >= startDate && todayDate <= endDate) {
   var wrappedmsg = '<p><img src="https://iainrca.github.io/summon/OnArchitecture.png" width="100%" height="100%" /></p>
<div class="s-lg-az-result-title" style="box-sizing: border-box; font-weight: bold; display: inline; margin-right: 10px; color: #333333; font-family: BentonSans-Light, 'Helvetica Neue', Arial, Helvetica, sans-serif; font-size: 16px !important;"><a style="box-sizing: border-box; background-color: transparent; color: #2954d1; text-decoration-line: none;" href="http://www.onarchitecture.com/user/login">OnArchitecture</a>&nbsp;</div>
<div class="s-lg-az-result-description" style="box-sizing: border-box; line-height: 21px; color: #333333; font-family: BentonSans-Light, 'Helvetica Neue', Arial, Helvetica, sans-serif;">&nbsp;</div>
<div class="s-lg-az-result-description" style="box-sizing: border-box; line-height: 21px; color: #333333; font-family: BentonSans-Light, 'Helvetica Neue', Arial, Helvetica, sans-serif;">OnArchitecture is an international audiovisual archive of contemporary architecture. It features 500 original videos of interviews with architects, artists, editors, researchers and urban designers, and of buildings and installations.</div>
<div class="s-lg-az-result-description" style="box-sizing: border-box; line-height: 21px; color: #333333; font-family: BentonSans-Light, 'Helvetica Neue', Arial, Helvetica, sans-serif;">Log in to the VPN to gain access off site:<br style="box-sizing: border-box;" /><a style="box-sizing: border-box; color: #2954d1; text-decoration-line: none;" href="https://intranet.rca.ac.uk/student-vpn/">Student VPN</a><br style="box-sizing: border-box;" /><a style="box-sizing: border-box; color: #2954d1; text-decoration-line: none;" href="https://intranet.rca.ac.uk/staff-vpn/">Staff VPN</a></div>';
   jQuery('#content').prepend(wrappedmsg);
}
else {

var wrappedmsg = '<p><a class="twitter-timeline" href="https://twitter.com/RCALibrary?ref_src=twsrc%5Etfw" data-height="500" data-theme="light" data-chrome="nofooter noborders transparent">Tweets by RCALibrary</a></p>
<script src="https://platform.twitter.com/widgets.js"></script>';
   jQuery('#content').prepend(wrappedmsg);
   }



