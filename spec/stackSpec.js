describe("stack", function() {
  var stack;

  /* BEGIN DO NOT MODIFY */
  beforeEach(function() {
    // Before each test runs, create a new Stack
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      stack = makeStack();
    } else if (runner.is('src/prototypal')) {
      stack = Stack();
    } else if (runner.is('src/pseudoclassical')) {
      stack = new Stack();
    }
  });
  /* END DO NOT MODIFY */

  // Any stack implementation should have the following methods
  it('should have "push", "pop", and "size" methods', function() {
    expect(stack.push).to.be.a('function');
    expect(stack.pop).to.be.a('function');
    expect(stack.size).to.be.a('function');
  });

  it('should add pushed items to the top of the stack', function() {
    stack.push('bob');
    expect(stack.pop()).to.equal('bob');
  });


  it('should remove multiple popped items from the top of the stack in order', function() {
    stack.push('bill');
    stack.push('fred');
    stack.push('ted');
    expect(stack.pop()).to.equal('ted');
    expect(stack.pop()).to.equal('fred');
    expect(stack.pop()).to.equal('bill');
    expect(stack.pop()).to.equal(undefined);
  });

  it('should be size zero when stack is empty', function() {
    expect(stack.size()).to.equal(0);
  });

  it('should increment size by one when pushing', function() {
    stack.push('bob');
    expect(stack.size()).to.equal(1);
  });

  it('should decrement size by one when popping', function() {
    stack.push('bill');
    stack.push('greg');
    stack.pop();
    expect(stack.size()).to.equal(1);
  });
  it('should be size zero after excessive popping', function() {
    stack.pop();
    expect(stack.size()).to.equal(0);
  });



  // Hey! Add more tests here if you can think of ways to test your stack more thoroughly
});
