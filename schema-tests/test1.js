// @ description json schema demo
// @ autor lj
// @ time 2022-07-31

const Ajv = require('ajv') // version >= 8.0.0
const addFormats = require('ajv-formats')
const ajv = new Ajv()
addFormats(ajv)
const localize = require('ajv-i18n')
/**
 * 常见的需要校验的 数据类型
 *  string number, arry, time, email, mobileNumber
 */
const schema = {
  type: 'object',
  properties: {
    num: { type: 'number' },
    myEmail: {
      type: 'string',
      format: 'email',
    },
    myString: { type: 'string' },
    customData: {
      type: 'string',
      format: 'moreThan10',
      myKeyword: 'lj', // 自定义关键字 myKeyword
    },
    // array 配合 items，
    myArray: {
      type: 'array',
      items: {
        type: 'string', // items中的每项都是 string类型
      },
    },
    // myArray2: {
    //   type: 'array',
    //   items: [
    //     // items 中的第一项string , 第二项number
    //     {
    //       type: 'string',
    //     },
    //     {
    //       type: 'number',
    //     },
    //   ],
    // },
  },
  required: ['myString'],
  additionalProperties: false,
}

// ajv提供了自定义format
ajv.addFormat('moreThan10', (value) => {
  // 返回值 true则通过校验 ， false校验失败
  return value === 'hello'
})

ajv.addKeyword('myKeyword', {
  // ajv 自定义关键字， 方法1 推荐
  // schema 关键字myKeyword定义的值 lj, data 是实际数据的值customData 对应的值 hello
  validate: function (schema, data) {
    // console.log('schema', schema) // schema lj
    // console.log('data', data) // data hello
    if (schema === true) return true
    return data.length >= 5
  },

  // ajv 自定义关键字， 方法3 推荐
  // macro() {
  //   return {
  //     minLength: 5, // 在原有schema 规则基础上增加
  //   }
  // },
})

// ajv 自定义关键字， 方法2 复杂，1满足 不了时用2
// ajv.addKeyword('myKeyword', {
//   // 应该是重写了compile 规则
//   compile: function (schema, parentSchema) {
//     return () => true // 返回值必须是 函数
//   },
// })

const validate = ajv.compile(schema)

const data = {
  num: 1,
  myString: '23',
  myArray: ['cat', 12],
  myEmail: '123@163.com',
  customData: 'hello',
}

const valid = validate(data)
if (!valid) {
  localize.zh(validate.errors)
  console.log(validate.errors)
} else {
  console.log('success')
}
