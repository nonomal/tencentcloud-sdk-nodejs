
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.monitor.v20230616.Client({
  credential: {
    secretId: process.env.secretId,
    secretKey: process.env.secretKey,
  },
  region: "ap-shanghai",
  profile: {
    signMethod: "TC3-HMAC-SHA256",
    httpProfile: {
      reqMethod: "POST",
      reqTimeout: 30,
      endpoint: "cvm.ap-shanghai.tencentcloudapi.com",
    },
  },
})
describe("monitor.v20230616.test.js", function () {

it("monitor.v20230616.DescribeAIWorkbenchExecution", async function () {
    try {
       const data = await client.DescribeAIWorkbenchExecution({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.ListAIWorkbenchMessages", async function () {
    try {
       const data = await client.ListAIWorkbenchMessages({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.DescribeNoticeContentTmpl", async function () {
    try {
       const data = await client.DescribeNoticeContentTmpl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.ListAIWorkbenchSessions", async function () {
    try {
       const data = await client.ListAIWorkbenchSessions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.DescribeExtNamespace", async function () {
    try {
       const data = await client.DescribeExtNamespace({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.DescribeAIWorkbenchSkill", async function () {
    try {
       const data = await client.DescribeAIWorkbenchSkill({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.CancelAIWorkbenchChat", async function () {
    try {
       const data = await client.CancelAIWorkbenchChat({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.DescribeAIWorkbenchAgent", async function () {
    try {
       const data = await client.DescribeAIWorkbenchAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.ListAIWorkbenchSkills", async function () {
    try {
       const data = await client.ListAIWorkbenchSkills({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.ListAIWorkbenchResourceInstances", async function () {
    try {
       const data = await client.ListAIWorkbenchResourceInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.CreateNoticeContentTmpl", async function () {
    try {
       const data = await client.CreateNoticeContentTmpl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.TriggerAIWorkbenchSREDigitalTwinTask", async function () {
    try {
       const data = await client.TriggerAIWorkbenchSREDigitalTwinTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.ListAIWorkbenchMCPs", async function () {
    try {
       const data = await client.ListAIWorkbenchMCPs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.DeleteAIWorkbenchAgent", async function () {
    try {
       const data = await client.DeleteAIWorkbenchAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.DescribeAIWorkbenchSession", async function () {
    try {
       const data = await client.DescribeAIWorkbenchSession({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.DeleteAIWorkbenchTask", async function () {
    try {
       const data = await client.DeleteAIWorkbenchTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.CreateAIWorkbenchAgent", async function () {
    try {
       const data = await client.CreateAIWorkbenchAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.DescribeAlarmNotifyHistories", async function () {
    try {
       const data = await client.DescribeAlarmNotifyHistories({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.DescribeAIWorkbenchArtifact", async function () {
    try {
       const data = await client.DescribeAIWorkbenchArtifact({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.ListAIWorkbenchArtifacts", async function () {
    try {
       const data = await client.ListAIWorkbenchArtifacts({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.CreateDispenseExternalRule", async function () {
    try {
       const data = await client.CreateDispenseExternalRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.TriggerAIWorkbenchTask", async function () {
    try {
       const data = await client.TriggerAIWorkbenchTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.CreateAIWorkbenchTask", async function () {
    try {
       const data = await client.CreateAIWorkbenchTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.ListAIWorkbenchExecutions", async function () {
    try {
       const data = await client.ListAIWorkbenchExecutions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.DescribeAIWorkbenchSREDigitalTwinWorkLogList", async function () {
    try {
       const data = await client.DescribeAIWorkbenchSREDigitalTwinWorkLogList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.DescribeDispenseExternalRule", async function () {
    try {
       const data = await client.DescribeDispenseExternalRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.DescribeDispenseRegion", async function () {
    try {
       const data = await client.DescribeDispenseRegion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.DescribeAIWorkbenchSREDigitalTwinTaskList", async function () {
    try {
       const data = await client.DescribeAIWorkbenchSREDigitalTwinTaskList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.ModifyDispenseExternalRule", async function () {
    try {
       const data = await client.ModifyDispenseExternalRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.DeleteNoticeContentTmpls", async function () {
    try {
       const data = await client.DeleteNoticeContentTmpls({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.DescribeAIWorkbenchSREDigitalTwinWorkLogDetail", async function () {
    try {
       const data = await client.DescribeAIWorkbenchSREDigitalTwinWorkLogDetail({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.ListAIWorkbenchTasks", async function () {
    try {
       const data = await client.ListAIWorkbenchTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.UpdateAIWorkbenchAgent", async function () {
    try {
       const data = await client.UpdateAIWorkbenchAgent({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.ModifyDispenseExternalRuleStatus", async function () {
    try {
       const data = await client.ModifyDispenseExternalRuleStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.DeleteDispenseExternalRule", async function () {
    try {
       const data = await client.DeleteDispenseExternalRule({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.DescribeDispenseExternalRuleList", async function () {
    try {
       const data = await client.DescribeDispenseExternalRuleList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.ListAIWorkbenchAgents", async function () {
    try {
       const data = await client.ListAIWorkbenchAgents({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.ListAIWorkbenchResourceMaps", async function () {
    try {
       const data = await client.ListAIWorkbenchResourceMaps({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.ModifyNoticeContentTmpl", async function () {
    try {
       const data = await client.ModifyNoticeContentTmpl({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.DescribeKafka", async function () {
    try {
       const data = await client.DescribeKafka({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.DescribeExtMetric", async function () {
    try {
       const data = await client.DescribeExtMetric({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("monitor.v20230616.GetAIWorkbenchArtifactDownloadURL", async function () {
    try {
       const data = await client.GetAIWorkbenchArtifactDownloadURL({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
