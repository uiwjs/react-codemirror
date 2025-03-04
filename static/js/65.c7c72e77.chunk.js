"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[65],{80065:(n,e,t)=>{t.r(e),t.d(e,{default:()=>i});const i='# good style\nfunction fixedpointmap(f; iv, tolerance=1E-7, maxiter=1000)\n    # setup the algorithm\n    x_old = iv\n    normdiff = Inf\n    iter = 1\n    while normdiff > tolerance && iter <= maxiter\n        x_new = f(x_old) # use the passed in map\n        normdiff = norm(x_new - x_old)\n        x_old = x_new\n        iter = iter + 1\n    end\n    return (value = x_old, normdiff=normdiff, iter=iter) # A named tuple\nend\n\n# define a map and parameters\np = 1.0\n\u03b2 = 0.9\nf(v) = p + \u03b2 * v # note that p and \u03b2 are used in the function!\n\nsol = fixedpointmap(f, iv=0.8, tolerance=1.0E-8) # don\'t need to pass\nprintln("Fixed point = $(sol.value), and |f(x) - x| = $(sol.normdiff) in $(sol.iter)"*\n        " iterations")\n'}}]);
//# sourceMappingURL=65.c7c72e77.chunk.js.map