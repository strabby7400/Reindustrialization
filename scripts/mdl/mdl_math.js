/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Function Base


    /* <---------------- polynomial ----------------> */


    const _linear = function(x, coefs) {
      return coefs[0] * x + coefs[1];
    };
    exports._linear = _linear;


    /* <---------------- interp ----------------> */


    const _interpHalf_log = function(x, a, b, base) {
      if(base == null) {
        return 1.0 - 0.5 * (Math.log(b + 1.0) - Math.log(x + 1.0)) / (Math.log(b + 1.0) - Math.log(a + 1.0));
      } else {
        return 1.0 - 0.5 * (Mathf.log(base, b + 1.0) - Mathf.log(base, x + 1.0)) / (Mathf.log(base, b + 1.0) - Mathf.log(base, a + 1.0));
      };
    };
    exports._interpHalf_log = _interpHalf_log;


    /* <---------------- distribution ----------------> */


    const _binoDistri = function(x, n, p) {
      return _binoCoef(x, n) * Math.pow(p, x) * Math.pow(1.0 - p, n - x);
    };
    exports._binoDistri = _binoDistri;


    const _normDistri = function(x, mean, stdDev) {
      return 1.0 / Math.sqrt(2.0 * Math.PI) / stdDev * Math.exp(-1.0 * Math.pow(x - mean, 2) / 2.0 / Math.pow(stdDev, 2));
    };
    exports._normDistri = _normDistri;
  // End


  // Part: Operation
    const sum = function(xs) {
      var val = 0.0;
      for(let x in xs) {val += x};

      return val;
    };
    exports.sum = sum;


    const wSum = function(xs, ws) {
      var val = 0.0;
      var cap = xs.length;
      for(let i = 0; i < cap; i++) {val += xs[i] * ws[i]};

      return val;
    };
    exports.wSum = wSum;


    const powSum = function(xs, pow) {
      if(pow == null) pow = 1.0;

      var val = 0.0;
      for(let x in xs) {val += Math.pow(x, pow)};

      return val;
    };
    exports.powSum = powSum;


    const prod = function(xs) {
      var val = 0.0;
      for(let x in xs) {val *= x};

      return val;
    };
    exports.prod = prod;


    const facto = function(x) {
      var val = 1.0;
      if(x < 0.0001) return 1.0;

      let i = 1.0;
      while(i < x + 0.0001) {
        val *= i;
        i++;
      };

      return val;
    };
    exports.facto = facto;


    const _binoCoef = function(x, n) {
      return facto(n) / facto(x) / facto(n - x);
    };
    exports._binoCoef = _binoCoef;
  // End


  // Part: Function
  // End


  // Part: Probability
    const _randInt = function(cap, base) {
      if(base == null) base = 0.0;

      return Math.floor(Math.random() * (cap + 1.0 - base) + base);
    };
    exports._randInt = _randInt;
  // End


  // Part: Statistics
    const mean = function(xs) {
      return sum(xs) / xs.length;
    };
    exports.mean = mean;


    const _rms = function(xs) {
      return Math.sqrt(powSum(xs, 2) / xs.length);
    };
    exports._rms = _rms;


    const _geoMean = function(xs) {
      return Math.pow(prod(xs), 1.0 / xs.length);
    };
    exports._geoMean = _geoMean;


    const _hmMean = function(xs) {
      return xs.length / powSum(xs, -1);
    };
    exports._hmMean = _hmMean;


    const _powMean = function(xs, pow) {
      if(pow == null) pow = 1.0;

      return Math.pow(powSum(xs, pow) / xs.length, 1.0 / pow);
    };
    exports._powMean = _powMean;


    const _vari = function(xs, isParent) {
      if(isParent == null) isParent = false;

      var mean = mean(xs);
      for(let x in xs) {val += Math.pow(x - mean, 2)};
      val /= (isParent) ? (xs.length - 1) : xs.length;

      return val;
    };
    exports._vari = _vari;


    const _cov = function(vs, isParent) {
      if(isParent == null) isParent = false;

      var meanX = mean(_vecXs(vs));
      var meanY = mean(_vecYs(vs));
      for(let v in vs) {val += (v.x - meanX) * (v.y - meanY)};
      val /= (isParent) ? (vs.length - 1) : vs.length;

      return val;
    };
    exports._cov = _cov;


    const _stdDev = function(xs, isParent) {
      return Math.sqrt(_vari(xs, isParent));
    };
    exports._stdDev = _stdDev;


    const linearReg = function(vs) {
      var xs = _vecXs(vs);
      var ys = _vecYs(vs);
      var meanX = mean(xs);
      var meanY = mean(ys);

      var tmpVar = 0.0;
      var tmpCov = 0.0;
      var cap = vs.length;
      for(let i = 0; i < cap; i++) {
        tmpVar += Math.pow(xs[i] - meanX, 2);
        tmpCov += (xs[i] - meanX) * (ys[i] - meanY);
      };

      var slp = tmpCov / tmpVar;
      var y_0 = meanY - meanX * slp;

      return [slp, y_0];
    };
    exports.linearReg = linearReg;
  // End


  // Part: Vector
    const _vecXs = function(vs) {
      var xs = [];
      for(let v in vs) {xs.push(v.x)};

      return xs;
    };
    exports._vecXs = _vecXs;


    const _vecYs = function(vs) {
      var ys = [];
      for(let v in vs) {ys.push(v.y)};

      return ys;
    };
    exports._vecYs = _vecYs;


    const _vecZs = function(vs) {
      var zs = [];
      for(let v in vs) {zs.push(v.z)};

      return zs;
    };
    exports._vecZs = _vecZs;


    /* <---------------- vec2 ----------------> */


    const sumVec2 = function(vs) {
      var valX = 0.0;
      var valY = 0.0;
      for(let v in vs) {
        valX += v.x;
        valY += v.y;
      };

      return new Vec2(valX, valY);
    };
    exports.sumVec2 = sumVec2;


    /* <---------------- vec3 ----------------> */


    const sumVec3 = function(vs) {
      var valX = 0.0;
      var valY = 0.0;
      var valZ = 0.0;
      for(let v in vs) {
        valX += v.x;
        valY += v.y;
        valZ += v.z;
      };

      return new Vec3(valX, valY, valZ);
    };
    exports.sumVec3 = sumVec3;
  // End


Events.run(ClientLoadEvent, () => {
  Log.info("REIND: mdl_math.js loaded.");
});
