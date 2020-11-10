import mx from 'mxgraph';
const index = mx({
    mxImageBasePath: './src/images',
    mxBasePath: './src'
});
// decode bug https://github.com/jgraph/mxgraph/issues/49
window.mxGraph = index.mxGraph;
window.mxGraphModel = index.mxGraphModel;
window.mxEditor = index.mxEditor;
window.mxGeometry = index.mxGeometry;
window.mxDefaultKeyHandler = index.mxDefaultKeyHandler;
window.mxDefaultPopupMenu = index.mxDefaultPopupMenu;
window.mxStylesheet = index.mxStylesheet;
window.mxDefaultToolbar = index.mxDefaultToolbar;
window.mxToolbar = index.mxToolbar;
window.mxUndoManager = index.mxUndoManager;
window.mxImage = index.mxImage;
export default index;
