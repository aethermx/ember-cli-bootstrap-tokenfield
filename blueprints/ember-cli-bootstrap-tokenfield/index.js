module.exports = {
  description: '',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  normalizeEntityName: function() {
    // allows us to run ember -g ember-cli-bootswatch and not blow up
    // because ember cli normally expects the format
    // ember generate <entitiyName> <blueprint>
  },

  afterInstall: function(options) {
    var _this = this;
    
    console.log('Note: bootstrap-tokenfield depends on jquery 2.1.0');
    console.log('      Use that version or higher.');

    return _this.addBowerPackageToProject('jquery', '2.1.0').then(function() {
      return _this.addBowerPackageToProject('jquery-ui', '1.11.4').then(function() {
        return _this.addBowerPackageToProject('bootstrap-tokenfield');
      });
    });
  }
};
