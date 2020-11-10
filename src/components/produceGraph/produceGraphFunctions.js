import mxgraph from "@/graph/index.js";
const {
	mxGraph,
	mxClient,
	mxCodec,
	mxUtils,
	mxConstants,
	mxPerimeter,
	mxRectangle
  } = mxgraph;
const produceGraphFunctions={


main:function(container)
		{
			// Checks if the browser is supported
			if (!mxClient.isBrowserSupported())
			{
				// Displays an error message if the browser is not supported.
				mxUtils.error('Browser is not supported!', 200, false);
			}
			else {
				// Creates the graph inside the given container
				var graph = new mxGraph(container);

				// Sets a background image and restricts child movement to its bounds
				graph.setBackgroundImage(new mxImage(require('@/assets/background.png'), 1250, 650));
				graph.maximumGraphBounds = new mxRectangle(0, 0, 1250, 650);

				// Resizes the container but never make it bigger than the background
				graph.minimumContainerSize = new mxRectangle(0, 0, 1250, 650);
				graph.setResizeContainer(true);


				// Disables basic selection and cell handling
				//graph.setEnabled(false);
				this.configureStylesheet(graph);

				// Gets the default parent for inserting new cells. This
				// is normally the first child of the root (ie. layer 0).
				var parent = graph.getDefaultParent();
				// Adds cells to the model in a single step
				graph.getModel().beginUpdate();
				try {
					var whpo = graph.insertVertex(parent, null, '', 890, 285, 100, 98, 'WHP14');
					var whpm = graph.insertVertex(parent, null, '', 544, 260, 138, 98, 'WHP12');
					var cepi = graph.insertVertex(parent, null, '', 240, 280, 300, 300, 'CEP');
					var whpd = graph.insertVertex(parent, null, '', 520, 297, 130, 207, 'WHP');//X,Y,W,H
					var whpb = graph.insertVertex(parent, null, '', 840, 480, 120, 110, 'WHP3');
					var whpa = graph.insertVertex(parent, null, '', 626, 432, 140, 100, 'WHP4');
					var whpe = graph.insertVertex(parent, null, '', 580, 555, 90, 70, 'WHP5');
					var whpf = graph.insertVertex(parent, null, '', 945, 480, 60, 40, 'WHP6');
					var whpg = graph.insertVertex(parent, null, '', 792, 450, 60, 40, 'WHP7');
					var whpi = graph.insertVertex(parent, null, '', 752, 481, 120, 80, 'WHP8');
					var whpj = graph.insertVertex(parent, null, '', 740, 374, 60, 55, 'WHP9');
					var whpk = graph.insertVertex(parent, null, '', 950, 426, 60, 55, 'WHP10');
					var whpl = graph.insertVertex(parent, null, '', 850, 426, 60, 55, 'WHP11');
					var whpn = graph.insertVertex(parent, null, '', 945, 510, 60, 30, 'WHP13');
					var whpc = graph.insertVertex(parent, null, '', 540, 266, 450, 120, 'WHP1');
					var whph = graph.insertVertex(parent, null, '', 685, 390, 60, 55, 'WHP2');
					var e1 = graph.insertEdge(parent, null, '', whpm, whpa, 'endArrow=none;perimeterSpacing=0;strokeWidth=4;strokeColor=rgb(250,200,0);');
					var e5 = graph.insertEdge(parent, null, '', whpo, whpa, 'endArrow=none;perimeterSpacing=0;strokeWidth=4;strokeColor=rgb(250,200,0);');
					var e2 = graph.insertEdge(parent, null, '', whpd, whpe, 'endArrow=none;perimeterSpacing=0;strokeWidth=4;strokeColor=rgb(250,200,0);');
					var e3 = graph.insertEdge(parent, null, '', whpa, whpe, 'endArrow=none;perimeterSpacing=0;strokeWidth=4;strokeColor=rgb(250,200,0);');
					var e4 = graph.insertEdge(parent, null, '', whpb, whpe, 'endArrow=none;perimeterSpacing=0;strokeWidth=4;strokeColor=rgb(250,200,0);');
				} finally {
					// Updates the display
					graph.getModel().endUpdate();
				}
				graph.addListener(mxEvent.CLICK, function(sender, evt) {
					var cell = evt.getProperty('cell');
					var nodeId = self.getTaskId(cell);
					if (nodeId.length > 0) {
						self.clickCell(self.graphId, nodeId);
						if(nodeId==='WHP6'){
							this.$router.push({ path:'/ProductionManagement/VirtualMeasurement'})

						}
					}
				});

			}
		},


	configureStylesheet:function (graph)
		{
			var style = new Object();
			style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
			style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
			style[mxConstants.STYLE_IMAGE] = require('@/assets/center.png');
			style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
			graph.getStylesheet().putCellStyle('WHP', style);
			style = mxUtils.clone(style);
			style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
			style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
			style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
			style[mxConstants.STYLE_IMAGE] =  require('@/assets/1.png');
			graph.getStylesheet().putCellStyle('WHP13', style);
			style = mxUtils.clone(style);
			style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
			style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
			style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
			style[mxConstants.STYLE_IMAGE] =  require('@/assets/1.png');
			graph.getStylesheet().putCellStyle('WHP14', style);

			style = mxUtils.clone(style);
			style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
			style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
			style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
			style[mxConstants.STYLE_IMAGE] =  require('@/assets/left.png');
			graph.getStylesheet().putCellStyle('CEP', style);
			style = mxUtils.clone(style);
			style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
			style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
			style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
			style[mxConstants.STYLE_IMAGE] =  require('@/assets/top1.png');
			graph.getStylesheet().putCellStyle('WHP12', style);
			style = mxUtils.clone(style);
			style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
			style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
			style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
			style[mxConstants.STYLE_IMAGE] =  require('@/assets/top.png');
			graph.getStylesheet().putCellStyle('WHP1', style);



			style = mxUtils.clone(style);
			style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
			style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
			style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
			style[mxConstants.STYLE_IMAGE] =  require('@/assets/platform1.png');
			graph.getStylesheet().putCellStyle('WHP3', style);
			style = mxUtils.clone(style);
			style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
			style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
			style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
			style[mxConstants.STYLE_IMAGE] =  require('@/assets/platform2.png');
			graph.getStylesheet().putCellStyle('WHP4', style);
			style = mxUtils.clone(style);
			style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
			style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
			style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
			style[mxConstants.STYLE_IMAGE] =  require('@/assets/platform3.png');
			graph.getStylesheet().putCellStyle('WHP5', style);
			style = mxUtils.clone(style);
			style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
			style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
			style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
			style[mxConstants.STYLE_IMAGE] =  require('@/assets/whpc.png');
			graph.getStylesheet().putCellStyle('WHP6', style);
			style = mxUtils.clone(style);
			style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
			style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
			style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
			style[mxConstants.STYLE_IMAGE] =  require('@/assets/whph.png');
			graph.getStylesheet().putCellStyle('WHP7', style);
			style = mxUtils.clone(style);
			style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
			style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
			style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
			style[mxConstants.STYLE_IMAGE] =  require('@/assets/pipe.png');
			graph.getStylesheet().putCellStyle('WHP8', style);

			style = mxUtils.clone(style);
			style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
			style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
			style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
			style[mxConstants.STYLE_IMAGE] =  require('@/assets/message.png');
			graph.getStylesheet().putCellStyle('WHP9', style);

			style = mxUtils.clone(style);
			style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
			style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
			style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
			style[mxConstants.STYLE_IMAGE] =  require('@/assets/message.png');
			graph.getStylesheet().putCellStyle('WHP10', style);

			style = mxUtils.clone(style);
			style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
			style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
			style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
			style[mxConstants.STYLE_IMAGE] =  require('@/assets/message.png');
			graph.getStylesheet().putCellStyle('WHP11', style);
			style = mxUtils.clone(style);
			style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
			style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
			style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
			style[mxConstants.STYLE_IMAGE] =  require('@/assets/cepi.png');
			graph.getStylesheet().putCellStyle('WHP2', style);


			style = mxUtils.clone(style);
			style[mxConstants.STYLE_IMAGE_VERTICAL_ALIGN] = mxConstants.ALIGN_BOTTOM;
			style[mxConstants.STYLE_IMAGE] = 'assets/logo.png';
			delete style[mxConstants.STYLE_SPACING_TOP];
			graph.getStylesheet().putCellStyle('WH', style);

			style = mxUtils.clone(style);
			style[mxConstants.STYLE_ALIGN] = mxConstants.ALIGN_LEFT;
			style[mxConstants.STYLE_IMAGE_ALIGN] = mxConstants.ALIGN_LEFT;
			style[mxConstants.STYLE_VERTICAL_ALIGN] = mxConstants.ALIGN_MIDDLE;
			style[mxConstants.STYLE_IMAGE_VERTICAL_ALIGN] = mxConstants.ALIGN_MIDDLE;
			style[mxConstants.STYLE_IMAGE] = 'assets/logo.png';
			style[mxConstants.STYLE_SPACING_LEFT] = '55';
			style[mxConstants.STYLE_SPACING] = '4';
			graph.getStylesheet().putCellStyle('right', style);

			style = mxUtils.clone(style);
			style[mxConstants.STYLE_ALIGN] = mxConstants.ALIGN_RIGHT;
			style[mxConstants.STYLE_IMAGE_ALIGN] = mxConstants.ALIGN_RIGHT;
			delete style[mxConstants.STYLE_SPACING_LEFT];
			style[mxConstants.STYLE_SPACING_RIGHT] = '55';
			graph.getStylesheet().putCellStyle('left', style);
		},
	}
        export default produceGraphFunctions
