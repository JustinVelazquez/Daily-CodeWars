describe("Example tests",_=>{
    Test.assertSimilar(sortTransform([121, 122, 123, 124, 125, 120, 122, 132]), 'yzz-xy}-}yx-xy}');
    Test.assertSimilar(sortTransform([111, 112, 113, 114, 115, 113, 114, 110]), 'oprn-nors-sron-nors');
    Test.assertSimilar(sortTransform([51, 62, 73, 84, 95, 100, 99, 126]), '3>c~-3>d~-~d>3-3>d~');
    });