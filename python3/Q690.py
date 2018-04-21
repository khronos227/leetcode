#/usr/bin/env python3
from functools import reduce

"""
# Employee info
class Employee:
    def __init__(self, id, importance, subordinates):
        # It's the unique id of each node.
        # unique id of this employee
        self.id = id
        # the importance value of this employee
        self.importance = importance
        # the id of direct subordinates
        self.subordinates = subordinates
"""
class Solution:
    def getImportance(self, employees, id):
        """
        :type employees: Employee
        :type id: int
        :rtype: int
        """
        emplDict = {e.id: e for e in employees}
        unchecked = [id]
        targets = set()
        while len(unchecked) > 0:
          emp = emplDict[unchecked.pop()]
          targets.add(emp)
          unchecked += emp.subordinates

        return reduce(
            lambda a,b: a+b,
            map(
                lambda x: x.importance,
                targets
            )
        )

# ==========
class Employee:
    def __init__(self, id, importance, subordinates):
        # It's the unique id of each node.
        # unique id of this employee
        self.id = id
        # the importance value of this employee
        self.importance = importance
        # the id of direct subordinates
        self.subordinates = subordinates

if __name__ == '__main__':
  print(Solution().getImportance([Employee(1, 5, [2,3]), Employee(2, 3,[]), Employee(3,3,[])], 1))
  print(Solution().getImportance([Employee(1, 2, [2]), Employee(2, 3,[])], 2))
  print(Solution().getImportance([Employee(1, 5, [2,3]), Employee(2, 3,[4]), Employee(3,4,[]), Employee(4,1,[])], 1))

