
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.bdrc.v20260330.Client({
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
describe("bdrc.v20260330.test.js", function () {

it("bdrc.v20260330.DescribeBackupInstances", async function () {
    try {
       const data = await client.DescribeBackupInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeDrillPairsDeniedActions", async function () {
    try {
       const data = await client.DescribeDrillPairsDeniedActions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeDisasterRecoveryProtectGroups", async function () {
    try {
       const data = await client.DescribeDisasterRecoveryProtectGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.ModifySitePairAttribute", async function () {
    try {
       const data = await client.ModifySitePairAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeBackupVaultsDeniedActions", async function () {
    try {
       const data = await client.DescribeBackupVaultsDeniedActions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeCommonBackupPoints", async function () {
    try {
       const data = await client.DescribeCommonBackupPoints({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DeleteBackupVaults", async function () {
    try {
       const data = await client.DeleteBackupVaults({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeDisasterRecoverySitePairsDeniedActions", async function () {
    try {
       const data = await client.DescribeDisasterRecoverySitePairsDeniedActions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.ModifyBackupAttribute", async function () {
    try {
       const data = await client.ModifyBackupAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DeleteSecurityGroupMapping", async function () {
    try {
       const data = await client.DeleteSecurityGroupMapping({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DeleteCopyPairs", async function () {
    try {
       const data = await client.DeleteCopyPairs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.RunFailoverCopyPairs", async function () {
    try {
       const data = await client.RunFailoverCopyPairs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeFileBackupObjects", async function () {
    try {
       const data = await client.DescribeFileBackupObjects({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeFileBackupsDeniedActions", async function () {
    try {
       const data = await client.DescribeFileBackupsDeniedActions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.ReportAgentMetrics", async function () {
    try {
       const data = await client.ReportAgentMetrics({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeBackupGroupRollbackTasks", async function () {
    try {
       const data = await client.DescribeBackupGroupRollbackTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeDisasterRecoveryOverview", async function () {
    try {
       const data = await client.DescribeDisasterRecoveryOverview({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeBackupOverviewGeneral", async function () {
    try {
       const data = await client.DescribeBackupOverviewGeneral({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeAutoBackupPolicies", async function () {
    try {
       const data = await client.DescribeAutoBackupPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeDisasterRecoverySitePairs", async function () {
    try {
       const data = await client.DescribeDisasterRecoverySitePairs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.UnbindAutoBackupPolicy", async function () {
    try {
       const data = await client.UnbindAutoBackupPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeProtectedInstances", async function () {
    try {
       const data = await client.DescribeProtectedInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.CreateSecurityGroupMapping", async function () {
    try {
       const data = await client.CreateSecurityGroupMapping({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.ModifyProtectGroupAttribute", async function () {
    try {
       const data = await client.ModifyProtectGroupAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DeleteDisasterRecoveryVpcMapping", async function () {
    try {
       const data = await client.DeleteDisasterRecoveryVpcMapping({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.ModifyBackupVaultAttribute", async function () {
    try {
       const data = await client.ModifyBackupVaultAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.ReportGatewayHeartbeat", async function () {
    try {
       const data = await client.ReportGatewayHeartbeat({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.RunInstancesWithBackupGroup", async function () {
    try {
       const data = await client.RunInstancesWithBackupGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.ModifyAutoBackupPolicyAttribute", async function () {
    try {
       const data = await client.ModifyAutoBackupPolicyAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeCopyPairsDeniedActions", async function () {
    try {
       const data = await client.DescribeCopyPairsDeniedActions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeProtectGroupsDeniedActions", async function () {
    try {
       const data = await client.DescribeProtectGroupsDeniedActions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.CreateDisasterRecoveryVpcMapping", async function () {
    try {
       const data = await client.CreateDisasterRecoveryVpcMapping({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.ModifyDrillGroupAttribute", async function () {
    try {
       const data = await client.ModifyDrillGroupAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.CreateFileBackup", async function () {
    try {
       const data = await client.CreateFileBackup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.RunCopyPairTasks", async function () {
    try {
       const data = await client.RunCopyPairTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.ApplyBackupGroup", async function () {
    try {
       const data = await client.ApplyBackupGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DeleteBackupGroups", async function () {
    try {
       const data = await client.DeleteBackupGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeFileBackups", async function () {
    try {
       const data = await client.DescribeFileBackups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.ModifyFileBackupAttribute", async function () {
    try {
       const data = await client.ModifyFileBackupAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeDisasterRecoveryDrillGroups", async function () {
    try {
       const data = await client.DescribeDisasterRecoveryDrillGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.CreateFileRestoreTask", async function () {
    try {
       const data = await client.CreateFileRestoreTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.ReportJobProgress", async function () {
    try {
       const data = await client.ReportJobProgress({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DeleteFileBackupPlans", async function () {
    try {
       const data = await client.DeleteFileBackupPlans({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.CreateAutoBackupPolicy", async function () {
    try {
       const data = await client.CreateAutoBackupPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.CreateBackupVault", async function () {
    try {
       const data = await client.CreateBackupVault({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DeleteAutoBackupPolicies", async function () {
    try {
       const data = await client.DeleteAutoBackupPolicies({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeFileBackupPlans", async function () {
    try {
       const data = await client.DescribeFileBackupPlans({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.CreateInstanceDrillPairs", async function () {
    try {
       const data = await client.CreateInstanceDrillPairs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DeleteDisasterRecoveryProtectGroups", async function () {
    try {
       const data = await client.DeleteDisasterRecoveryProtectGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.ModifyFileBackupPlan", async function () {
    try {
       const data = await client.ModifyFileBackupPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.BindAutoBackupPolicy", async function () {
    try {
       const data = await client.BindAutoBackupPolicy({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeDrillPairs", async function () {
    try {
       const data = await client.DescribeDrillPairs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeFileRestoreTasks", async function () {
    try {
       const data = await client.DescribeFileRestoreTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.CreateDisasterRecoveryProtectGroup", async function () {
    try {
       const data = await client.CreateDisasterRecoveryProtectGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.CreateFileBackupPlan", async function () {
    try {
       const data = await client.CreateFileBackupPlan({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeBackupVaults", async function () {
    try {
       const data = await client.DescribeBackupVaults({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribePriceCreateCopyPairs", async function () {
    try {
       const data = await client.DescribePriceCreateCopyPairs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeVpcMappings", async function () {
    try {
       const data = await client.DescribeVpcMappings({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.CreateBackupGroup", async function () {
    try {
       const data = await client.CreateBackupGroup({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.FinishFailoverCopyPairs", async function () {
    try {
       const data = await client.FinishFailoverCopyPairs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.StopCopyPairTasks", async function () {
    try {
       const data = await client.StopCopyPairTasks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.ModifyCopyPairAttribute", async function () {
    try {
       const data = await client.ModifyCopyPairAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeBackupGroups", async function () {
    try {
       const data = await client.DescribeBackupGroups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeCopyPairs", async function () {
    try {
       const data = await client.DescribeCopyPairs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeBackupGroupsDeniedActions", async function () {
    try {
       const data = await client.DescribeBackupGroupsDeniedActions({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.CreateInstanceCopyPair", async function () {
    try {
       const data = await client.CreateInstanceCopyPair({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DeleteDrillPairs", async function () {
    try {
       const data = await client.DeleteDrillPairs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeJobs", async function () {
    try {
       const data = await client.DescribeJobs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.ModifyDrillPairAttribute", async function () {
    try {
       const data = await client.ModifyDrillPairAttribute({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeDisks", async function () {
    try {
       const data = await client.DescribeDisks({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeDisasterRecoverySupportRegion", async function () {
    try {
       const data = await client.DescribeDisasterRecoverySupportRegion({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeBackupPlans", async function () {
    try {
       const data = await client.DescribeBackupPlans({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DeleteDisasterRecoverySitePairs", async function () {
    try {
       const data = await client.DeleteDisasterRecoverySitePairs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DeleteFileBackups", async function () {
    try {
       const data = await client.DeleteFileBackups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.DescribeSecurityGroupMappings", async function () {
    try {
       const data = await client.DescribeSecurityGroupMappings({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("bdrc.v20260330.CreateDisasterRecoverySitePair", async function () {
    try {
       const data = await client.CreateDisasterRecoverySitePair({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
