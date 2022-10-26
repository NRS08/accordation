<script>
 
class Node
{
    constructor(data)
    {
        this.data=data;
        this.next = null;
    }
}
 
function multiplyTwoLists(first, second)
{
    let N = 1000000007;
    let num1 = 0, num2 = 0;
  
    while (first != null ||
           second !=  null)
    {            
        if(first != null)
        {
            num1 = (((num1) * 10) % N +
                      first.data);
            first = first.next;
        }
              
        if(second != null)
        {
            num2 = (((num2) * 10) % N +
                      second.data);
            second = second.next;
        }            
    }
    return ((num1%N)*(num2%N))%N;
}
  
function printList(node)
{
    while(node != null)
    {
        document.write(node.data);
        if(node.next != null)
            document.write("->");
        node = node.next;
    }
    document.write("<br>");
}       
 
let first = new Node(9);
first.next = new Node(4);
first.next.next = new Node(6);
document.write("First List is: ");
printList(first);
 
let second = new Node(8);
second.next = new Node(4);
document.write("Second List is: ");
printList(second);
 
document.write("Result is: ");
document.write(multiplyTwoLists(first, second)+"<br>");
 
</script>