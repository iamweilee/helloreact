const random_jokes = [
  {
    setup: 'What is the object oriented way to get wealthy ?',
    punchline: 'Inheritance',
  },
  {
    setup: 'To understand what recursion is...',
    punchline: "You must first understand what recursion is",
  },
  {
    setup: 'What do you call a factory that sells passable products?',
    punchline: 'A satisfactory',
  },
];

let random_joke_call_count = 0;

const listData = [{
  name : 'umi',
  desc : '极快的类 Next.js 的 React 应用框架',
  url  : 'https://umijs.org'
},
{
  name : 'antd',
  desc : '一个服务于企业级产品的设计体系',
  url  : 'https://ant.design/index-cn'
},
{
  name : 'antd-pro',
  desc : '一个服务于企业级产品的设计体系',
  url  : 'https://ant.design/index-cn'
}];

export default {
  'get /dev/list': function(req, res) {
    setTimeout(() => {
      res.json(listData);
    }, 3000);
  },
  'post /dev/card': function(req, res) {
    setTimeout(() => {
      res.json(req.body);
    }, 3000);
  }
};