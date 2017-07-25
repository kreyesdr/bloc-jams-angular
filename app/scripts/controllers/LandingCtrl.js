(function () {
  function LandingCtrl() {
    this.heroTitle = "Turn the music Up!";
  }

  angular
   .module('blocJams')
   .controller('LandingCtrl', LandingCtrl);
})();
