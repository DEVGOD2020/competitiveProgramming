class Foo:
    def __init__(self):
        self.a = threading.Lock()
        self.b = threading.Lock()
        self.a.acquire()
        self.b.acquire()


    def first(self, printFirst: 'Callable[[], None]') -> None:
        
        # printFirst() outputs "first". Do not change or remove this line.
        printFirst()
        self.a.release()


    def second(self, printSecond: 'Callable[[], None]') -> None:
        
        # printSecond() outputs "second". Do not change or remove this line.
        self.a.acquire()
        printSecond()
        self.b.release()


    def third(self, printThird: 'Callable[[], None]') -> None:
        
        # printThird() outputs "third". Do not change or remove this line.
        self.b.acquire()
        printThird()