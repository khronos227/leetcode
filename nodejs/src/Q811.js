/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
class CountableNTree {
  constructor(domain = undefined) {
    this.count = 0
    this.domain = domain
    this.children = {}
  }

  addChild(accessData, parentDomains = []) {
    if (accessData.value.length <= 0) return
    const target = accessData.value.pop()
    parentDomains.unshift(target)

    if (!(target in this.children)) {
      this.children[target] = new CountableNTree(parentDomains.join("."))
    }
    const tree = this.children[target]
    tree.count += accessData.count
    tree.addChild(accessData, parentDomains)
  }

  getResult() {
    const subResults = Object.keys(this.children).map((key) => {
      return this.children[key].getResult()
    })
    subResults.push(Object.keys(this.children).map((key) => {
      const child = this.children[key]
      return `${child.count} ${child.domain}`
    }))
    return [].concat.apply([], subResults)
  }
}

class AccessData {
  constructor(count, domainList) {
    this.count = count
    this.value = domainList
  }
}

const subdomainVisits = function (cpdomains) {
  const root = new CountableNTree()
  cpdomains.forEach(accessData => {
    const [countStr, domain] = accessData.split(" ")
    const count = parseInt(countStr)
    const domainList = domain.split(".")
    root.addChild(new AccessData(count, domainList))
  })
  return root.getResult()
}

//=====================
function assertEq(as, bs) {
  return as.size === bs.size && all(isIn(bs), as);
}

function all(pred, as) {
  for (let a of as) if (!pred(a)) return false;
  return true;
}

function isIn(as) {
  return function (a) {
    return as.lastIndexOf(a) >= 0;
  };
}

console.log(assertEq(subdomainVisits(["9001 discuss.leetcode.com"]),["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]))