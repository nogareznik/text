(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



// stage content:
(lib.fonts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//ניתן להשתמש במבחר הפונטים הזמינים בגוגל
		// https://fonts.google.com/?subset=hebrew
		WebFontConfig = {
			google: {
				families: ['Rubik'] //כאן בחרו את הפונט
			}
		};
		
		//בפונקציה הזו אין לבצע שינויים, מייבאת את הפונט הרצוי
		(function () {
			var wf = document.createElement('script');
			wf.src = '//fonts.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
			wf.type = 'text/javascript';
			wf.async = true;
			var s = document.getElementsByTagName('script')[0];
		
			s.parentNode.insertBefore(wf, s);
		})();
		
		// קוד הפרוייקט -----------------------------------
		var self=this;
		self.dynamicText.color = "#2E2E2E";
		self.dynamicText.font = "35px Rubik"; //ציינו גם כאן את שם הפונט הנבחר
		self.dynamicText.textAlign = "center";
		self.dynamicText.text = "טקסט בפונט חיצוני ממורכז";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.dynamicText = new cjs.Text("", "30px 'Times New Roman'", "#999999");
	this.dynamicText.name = "dynamicText";
	this.dynamicText.lineHeight = 35;
	this.dynamicText.lineWidth = 342;
	this.dynamicText.parent = this;
	this.dynamicText.setTransform(99.1,216.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660066").s().p("AgvBOIgMgBIgFhPIgBgXIgBgRIgCgNIgEgMIALgGIALgEIAEAKIADALIACANIABARIAEBSIAEAAIAFAAQAQAAANgFQAPgFAKgLQALgLAGgQQAFgQAAgXIAAgKIgBgIIgNgDIgPgCIgDAKIgDAIIgDAIIgDAJIgTgGIAIgaIAIgZQASABAQADIAeAGIADARIABATQAAAagHATQgHATgMAOQgJAJgJAGQgKAGgKADQgJAEgLABIgWABIgOAAg");
	this.shape.setTransform(331.9,134.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660066").s().p("Ag8BmIAAhlIAAgLIAAgJIABgKIACgKIANACIAMACIgBAKIgBAIIgBAJIAAAJIAABlgAgLAkIAPgRIANgOIAMgMIAGgJIADgKIACgLIAAgNIAAgLIgBgMIg9AAIgMAAIgKgBIgJgCIgLgDIAEgLIADgLIALADIAJACIAKAAIALABIBNAAIACAHIABAFIABAKIAAAKIAAAVIAAAOIgDANIgEAMIgJAKIgVAYIgVAXg");
	this.shape_1.setTransform(314.5,136.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#660066").s().p("AgXBLQgMgGgIgJQgIgLgDgNQgEgNAAgQIABgRQACgJADgKIAEgMIAFgLIgMgCIgOgEIAFgKIADgMIALAEIAJABIAJABIAMAAIAmAAQANAAAJADQAKAEAGAGQAEAGADAGIAEAOIACAQIABAQIgCAWQgCAPgEALQgGAMgIAHQgHAIgMAFQgLADgNAAQgQABgMgGgAgbgfQgEALgBALIAAAJIAAAIQAAAKABAJQACAJAEAHQAFAHAIAEQAHAEAKAAQAHAAAHgCQAHgCAEgFQAFgFADgHQADgHACgIIABgNIABgKIgBgPIgCgOQgBgGgCgEQgCgEgDgDQgDgDgFgBIgNgBIgeAAQgHAKgDALg");
	this.shape_2.setTransform(297.3,134.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660066").s().p("AgvBOIgMgBIgFhPIgBgXIgBgRIgCgNIgEgMIALgGIALgEIAEAKIADALIACANIABARIAEBSIAEAAIAFAAQAQAAANgFQAPgFAKgLQALgLAGgQQAFgQAAgXIAAgKIgBgIIgNgDIgPgCIgDAKIgDAIIgDAIIgDAJIgTgGIAIgaIAIgZQASABAQADIAeAGIADARIABATQAAAagHATQgHATgMAOQgJAJgJAGQgKAGgKADQgJAEgLABIgWABIgOAAg");
	this.shape_3.setTransform(279.8,134.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#660066").s().p("AgXBLQgMgGgHgJQgJgLgDgNQgEgNAAgQIABgRQACgJADgKIAEgMIAGgLIgNgCIgOgEIAFgKIADgMIALAEIAJABIAJABIAMAAIAmAAQANAAAJADQAKAEAGAGQAEAGADAGIAEAOIACAQIABAQIgCAWQgCAPgEALQgGAMgIAHQgHAIgMAFQgLADgNAAQgQABgMgGgAgbgfQgEALgBALIAAAJIAAAIQAAAKABAJQACAJAFAHQAEAHAIAEQAHAEAKAAQAHAAAHgCQAHgCAEgFQAFgFADgHQADgHACgIIABgNIABgKIgBgPIgCgOQgBgGgCgEQgCgEgDgDQgDgDgFgBIgNgBIgeAAQgHAKgDALg");
	this.shape_4.setTransform(253.7,134.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#660066").s().p("AgvBOIgMgBIgFhPIgBgXIgBgRIgCgNIgEgMIALgGIALgEIAEAKIADALIACANIABARIAEBSIAEAAIAFAAQAQAAANgFQAPgFAKgLQALgLAGgQQAFgQAAgXIAAgKIgBgIIgNgDIgPgCIgDAKIgDAIIgDAIIgDAJIgTgGIAIgaIAIgZQASABAQADIAeAGIADARIABATQAAAagHATQgHATgMAOQgJAJgJAGQgKAGgKADQgJAEgLABIgWABIgOAAg");
	this.shape_5.setTransform(236.1,134.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#660066").s().p("AgvBOIgMgBIgFhPIgBgXIgBgRIgCgNIgEgMIALgGIALgEIAEAKIADALIACANIABARIAEBSIAEAAIAFAAQAQAAANgFQAPgFAKgLQALgLAGgQQAFgQAAgXIAAgKIgBgIIgNgDIgPgCIgDAKIgDAIIgDAIIgDAJIgTgGIAIgaIAIgZQASABAQADIAeAGIADARIABATQAAAagHATQgHATgMAOQgJAJgJAGQgKAGgKADQgJAEgLABIgWABIgOAAg");
	this.shape_6.setTransform(217.8,134.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#660066").s().p("AABAoIABgIIABgIIABgJIAAgMIAAgYIghAAIAAgWIA7AAIAAAvIAAANIgBAJIgBAJIgCAJg");
	this.shape_7.setTransform(203.6,131.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.dynamicText}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(372.1,310.2,346,161.7);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
