### sdk 本地启动

<div id="myDiv"></div>
<button onclick="embedNewProject()">Embed</button>

<script>
    import sdk from '@stackblitz/sdk'
    const project = {
        files: {
            'index.html': ``,
            'index.ts': `// I'm empty.`,
            'randomFile.ts': '// You should delete me.'
        },
    title: 'Dynamically Generated Project',
    description: 'Created with <3 by the StackBlitz SDK!',
    template: 'typescript',
    tags: ['stackblitz', 'sdk']
};




// Embed this project
window['embedNewProject'] = () => {

  sdk.embedProject('myDiv', project, {
    openFile: 'index.html'
  })
  // Get the VM of the embedded instance
  .then(vm => {
    // Wait 2 seconds...
    setTimeout(()=> {
      // Then update the VM's file system :)
      vm.applyFsDiff({
        create: {
          'index.html': ``
        },
        destroy: ['randomFile.ts']
      });
    }, 2000)
  });
}
</script>
