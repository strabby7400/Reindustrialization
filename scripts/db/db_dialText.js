/*
  ========================================
  Section: Definition
  ========================================
*/


  // Part: Import
    const mdl_ui = require("reind/mdl/mdl_ui");
  // End


  // Part: Manual[For Novice]
    const aboutDependencies = function() {
      var nm = "man-nov-about-dependencies";

      var i = 0.0;

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, 1.0, "in");
      mdl_ui._te(i + 1.0, "reind-dial-te-err", 0.5, false, 4.0, "jump");
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 1), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false);
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 2), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false);
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 3), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "jump");
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 4), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false);
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 5), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "shake");
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 6), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false);
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 7), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "down");
    };


    const copper = function() {
      var nm = "man-nov-copper";

      var i = 0.0;

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, 1.0, "in");
      mdl_ui._te(i + 1.0, "reind-dial-te-err", 0.5, false, 4.0, "jump");
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 1), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false);
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 2), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "jump");
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 3), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false);
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 4), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false);
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 5), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "jump");
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 6), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "down");
    };


    const defense = function() {
      var nm = "man-nov-defense";

      var i = 0.0;

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "in");
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 1), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "shake");
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 2), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "jump");
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 3), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false);
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 4), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false);
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 5), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "down");
    };


    const coreCrafter = function() {
      var nm = "man-nov-core-crafter";

      var i = 0.0;

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "in");
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 1), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "jump");
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 2), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "shake");
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 3), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "down");
    };


    const complex = function() {
      var nm = "man-nov-complex";

      var i = 0.0;

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "in");
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 1), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "shake");
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 2), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "jump");
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 3), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false);
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 4), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "shake");
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 5), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false);
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 6), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "shake");
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 7), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false);
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 8), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, 1.0, "jump");
      mdl_ui._te(i + 1.0, "reind-dial-te-err", 0.5, false, 4.0, "jump");
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 9), mdl_ui._speaker("earlan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "down");
    };
  // End


  // Part: Manual[Illight Terms]
    const dimension = function() {
      var nm = "man-ill-dimension";

      var i = 0.0;

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "in");
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 1), mdl_ui._speaker("cosmia"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false);
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 2), mdl_ui._speaker("cosmia"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false);
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 3), mdl_ui._speaker("cosmia"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "shake");
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 4), mdl_ui._speaker("cosmia"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false);
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 5), mdl_ui._speaker("cosmia"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false);
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 6), mdl_ui._speaker("cosmia"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "jump");
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 7), mdl_ui._speaker("cosmia"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "down");
    };


    const divineCreature = function() {
      var nm = "man-ill-divine-creature";

      var i = 0.0;

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "in");
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 1), mdl_ui._speaker("cosmia"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false);
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 2), mdl_ui._speaker("cosmia"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "shake");
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 3), mdl_ui._speaker("cosmia"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false);
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 4), mdl_ui._speaker("cosmia"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false);
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 5), mdl_ui._speaker("cosmia"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "jump");
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 6), mdl_ui._speaker("cosmia"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false);
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 7), mdl_ui._speaker("cosmia"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "shake");
      i += mdl_ui._dial_boxToast(i, mdl_ui._dialCtFlow(nm, 8), mdl_ui._speaker("cosmia"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "down");
    };
  // End


  // Part: Story
    const aerth_01a = function() {
      var nm = "aerth-01a";

      var i = 0.0;
      mdl_ui._bg(1.0, "reind-dial-bg1", 112.5);
      mdl_ui._bgm(1.0, Musics.boss1, 112.5);

      i += mdl_ui._transBlack(i);
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 1));
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 2));
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 3));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, false, null, "in");
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 4), mdl_ui._speaker("taryan"));
      mdl_ui._te(i, "reind-dial-te-err", 0.5);
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 5), mdl_ui._speaker("taryan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.5, true, 1.0, "moveX", 0.5, 0.3333);
      mdl_ui._te(i + 1.0, "reind-dial-te-err", 0.3333, true, 4.0);
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, false, null, "up");
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 6), mdl_ui._speaker("spore"));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, false);
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, true);
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 7), mdl_ui._speaker("taryan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, true);
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, false);
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 8), mdl_ui._speaker("spore"));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, false);
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, true);
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 9), mdl_ui._speaker("taryan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, false);
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, true);
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 10), mdl_ui._speaker("taryan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, true);
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, false, null, "shake");
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 11), mdl_ui._speaker("spore"));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, false);
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, true);
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 12), mdl_ui._speaker("taryan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, true);
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, false);
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 13), mdl_ui._speaker("spore"));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, false);
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, true);
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 14), mdl_ui._speaker("taryan"));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, true, null, "down");
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, true, null, "out");
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 15));
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 16));
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 17));
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 18));

      mdl_ui._transWhite(i, 0.2, 0.2, 0.0);
      mdl_ui._transWhite(i + 0.5, 0.75, 0.75, 0.0);

      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 19));
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 20));
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 21));
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 22));
      i += mdl_ui._transBlack(i);
    };


    const aerth_01b = function() {
      var nm = "aerth-01b";

      var i = 0.0;
      mdl_ui._bg(1.0, "reind-dial-bg1", 112.5);
      mdl_ui._bgm(1.0, Musics.game3, 112.5);

      i += mdl_ui._transBlack(i);

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, true, null, "up");
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, false, null, "up");
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 1), mdl_ui._speaker("spore"));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, false);
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, true);
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 2), mdl_ui._speaker("cosmia"));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, true);
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, true);
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 3));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, true);
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, true);
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 4));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, false);
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, true);
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 5), mdl_ui._speaker("cosmia"));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, true);
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, false);
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 6), mdl_ui._speaker("spore"));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, true);
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, true);
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 7));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, true);
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, true);
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 8));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, true);
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, false);
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 9), mdl_ui._speaker("spore"));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, false);
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, true);
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 10), mdl_ui._speaker("cosmia"));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, true);
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, false, null, "jump");
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 11), mdl_ui._speaker("spore"));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, false);
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, true);
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 12), mdl_ui._speaker("cosmia"));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, true, null, "down");
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, true, null, "down");
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 13));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, false, 1.0, "up");
      mdl_ui._te(i + 1.0, "reind-dial-te-err", 0.3333, false, 4.0, "shake");
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, true, null, "up");
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 14), mdl_ui._speaker("cosmia"));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, true);
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, true);
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 15));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, true);
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, false, null, "jump");
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 16), mdl_ui._speaker("spore"));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, false);
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, true);
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 17), mdl_ui._speaker("cosmia"));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, true);
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, false);
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 18), mdl_ui._speaker("spore"));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, true);
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, false);
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 19), mdl_ui._speaker("spore"));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, true);
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, true);
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 20));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, false, null, "jump");
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, true);
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 21), mdl_ui._speaker("cosmia"));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, true);
      mdl_ui._te(i, "reind-dial-te-err", 0.6667, false, null, "down");
      i += mdl_ui._dial_boxFade(i, mdl_ui._dialCtFlow(nm, 22), mdl_ui._speaker("spore"));

      mdl_ui._te(i, "reind-dial-te-err", 0.3333, true, null, "out");
      i += mdl_ui._transBlack(i);

    };
  // End


  // Part: Map
    const map = new Seq([
      "man-nov-about-dependencies", aboutDependencies,
      "man-nov-copper", copper,
      "man-nov-defense", defense,
      "man-nov-core-crafter", coreCrafter,
      "man-nov-complex", complex,

      "man-ill-dimension", dimension,
      "man-ill-divine-creature", divineCreature,

      "reind-sta-file-aerth-01a", aerth_01a,
      "reind-sta-file-aerth-01b", aerth_01b,
    ]);
    exports.map = map;
  // End
