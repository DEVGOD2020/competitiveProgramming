class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        if( len(hand) % groupSize != 0):
            return False
        myMap = Counter(hand)

        min_heap = list(myMap.keys())
        heapq.heapify(min_heap)

        while(min_heap):
            card = min_heap[0]

            for i in range(groupSize):
                if myMap[card + i] == 0:
                    return False
                myMap[card + i] -= 1
                if myMap[card + i] == 0:
                    if card + i != heapq.heappop(min_heap):
                        return False

        return True
        