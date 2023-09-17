class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export default function hasCycle(head: ListNode | null): boolean {
    let slow = head;
    let fast = head?.next;

    while (slow?.next && fast?.next?.next) {
        if (slow === fast) {
            return true;
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    return false;
}
