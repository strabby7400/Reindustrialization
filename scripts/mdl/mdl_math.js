/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Function Base
    const _linear = function(x, coefs) {
      return coefs[0] * x + coefs[1];
    };
    exports._linear = _linear;


    const _binoDistri = function(x, cap, p) {
      return binoCoef(x, cap) * Math.pow(p, x) * Math.pow(1.0 - p, cap - x);
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
        i++
      };

      return val;
    };
    exports.facto = facto;


    const binoCoef = function(x, cap) {
      return facto(cap) / facto(x) / facto(cap - x);
    };
    exports.binoCoef = binoCoef;
  // End


  // Part: Function
  // End


  // Part: Probability
    const randInt = function(cap, base) {
      if(base == null) base = 0.0;

      return Math.floor(Math.random() * (cap + 1.0 - base) + base);
    };
    exports.randInt = randInt;
  // End


  // Part: Statistics
    const mean = function(xs) {
      return sum(xs) / xs.length;
    };
    exports.mean = mean;


    const rms = function(xs) {
      return Math.sqrt(powSum(xs, 2) / xs.length);
    };
    exports.rms = rms;


    const geoMean = function(xs) {
      return Math.pow(prod(xs), 1.0 / xs.length);
    };
    exports.geoMean = geoMean;


    const hmMean = function(xs) {
      return xs.length / powSum(xs, -1);
    };
    exports.hmMean = hmMean;


    const powMean = function(xs, pow) {
      if(pow == null) pow = 1.0;

      return Math.pow(powSum(xs, pow) / xs.length, 1.0 / pow);
    };
    exports.powMean = powMean;


    const variance = function(xs, isParent) {
      if(isParent == null) isParent = false;

      var mean = mean(xs);
      for(let x in xs) {val += Math.pow(x - mean, 2)};
      val /= (isParent) ? (xs.length - 1) : xs.length;

      return val;
    };
    exports.variance = variance;


    const covariance = function(vs, isParent) {
      if(isParent == null) isParent = false;

      var meanX = mean(getXs(vs));
      var meanY = mean(getYs(vs));
      for(let v in vs) {val += (v.x - meanX) * (v.y - meanY)};
      val /= (isParent) ? (vs.length - 1) : vs.length;

      return val;
    };
    exports.covariance = covariance;


    const standardDeviation = function(xs, isParent) {
      return Math.sqrt(variance(xs, isParent));
    };
    exports.standardDeviation = standardDeviation;


    const linearReg = function(vs) {
      var xs = getXs(vs);
      var ys = getYs(vs);
      var meanX = mean(xs);
      var meanY = mean(ys);

      var temp_var = 0.0;
      var temp_cov = 0.0;
      var cap = vs.length;
      for(let i = 0; i < cap; i++) {
        temp_var += Math.pow(xs[i] - meanX, 2);
        temp_cov += (xs[i] - meanX) * (ys[i] - meanY);
      };

      var slp = temp_cov / temp_var;
      var y_0 = meanY - meanX * slp;

      return [slp, y_0];
    };
    exports.linearReg = linearReg;
  // End


  // Part: Vector
    const getXs = function(vs) {
      var xs = [];
      for(let v in vs) {xs.push(v.x)};

      return xs;
    };
    exports.getXs = getXs;


    const getYs = function(vs) {
      var ys = [];
      for(let v in vs) {ys.push(v.y)};

      return ys;
    };
    exports.getYs = getYs;


    const getZs = function(vs) {
      var zs = [];
      for(let v in vs) {zs.push(v.z)};

      return zs;
    };
    exports.getZs = getZs;


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
