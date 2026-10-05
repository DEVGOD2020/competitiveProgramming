#define MAX_SIZE 30000

typedef struct {
    int arr[MAX_SIZE];
    int top;
} Stack;

bool isFull(Stack *stack) {
    return stack->top >= MAX_SIZE - 1;
}

bool isEmpty(Stack *stack) {
    return stack->top == -1;
}

void push(Stack *stack, int value) {
    if (isFull(stack)) {
        return;
    }
    stack->arr[++(stack->top)] = value;
}

int pop(Stack *stack) {
    if (isEmpty(stack)) {return -1;}
    int popped = stack->arr[stack->top];
    stack->top--;
    return popped;
}

int peek(Stack *stack) {
    if (isEmpty(stack)) {return -1;}
    return stack->arr[stack->top];
}

int longestValidParentheses(char* s) {
    Stack stack;
    stack.top = -1;
    push(&stack,-1);
    int ans = 0;
    for(int I = 0; s[I] != '\0'; I++){
        if(s[I] == '('){
            push(&stack, I);
        }else{
            pop(&stack);
            if(isEmpty(&stack)){
                push(&stack,I);
            }else{
                if(ans < I-peek(&stack)){
                    ans = I-peek(&stack);
                }
            }
        }
    }
    return ans;
}
