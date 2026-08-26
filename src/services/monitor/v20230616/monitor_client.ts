/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  WebhookNoticeTmpl,
  TeamsRobotNoticeTmplMatcher,
  ListAIWorkbenchMCPsRequest,
  FeiShuRobotNoticeTmplMatcher,
  AIWorkbenchSREDigitalTwinTask,
  TriggerAIWorkbenchTaskResponse,
  AIWorkbenchSREDigitalTwinWorkLogDetail,
  NoticeContentTmplItem,
  ResourceMapInfo,
  AgentInfo,
  CreateNoticeContentTmplResponse,
  AIWorkbenchSREDigitalTwinWorkLog,
  DeleteAIWorkbenchTaskRequest,
  TriggerDigitalTwinTaskResp,
  DescribeAIWorkbenchArtifactRequest,
  SlackRobotNoticeTmpl,
  ListAIWorkbenchSessionsRequest,
  DescribeAIWorkbenchSREDigitalTwinWorkLogDetailRequest,
  ListAIWorkbenchAgentsResponse,
  ListAIWorkbenchSkillsRequest,
  SlackRobotNoticeTmplMatcher,
  DingDingRobotNoticeTmpl,
  WebhookNoticeTmplHeader,
  PageByNumParams,
  GetAIWorkbenchArtifactDownloadURLRequest,
  DingDingRobotNoticeTmplMatcher,
  AlarmNotifyHistory,
  DescribeAIWorkbenchSessionRequest,
  ListAIWorkbenchSessionsResponse,
  ListAIWorkbenchTasksResponse,
  DescribeAIWorkbenchExecutionResponse,
  ResourceInstance,
  TriggerAIWorkbenchSREDigitalTwinTaskResponse,
  PagerDutyRobotNoticeTmpl,
  Tag,
  DeleteAIWorkbenchAgentResponse,
  DescribeAIWorkbenchSREDigitalTwinWorkLogListRequest,
  QCloudYeheWeChatNoticeTmplItem,
  DescribeAlarmNotifyHistoriesRequest,
  UpdateAIWorkbenchAgentResponse,
  TeamsRobotNoticeTmpl,
  DeleteAIWorkbenchAgentRequest,
  NoticeContentTmpl,
  SessionInfo,
  PageByNoResult,
  TeamsWorkflowRobotNoticeTmpl,
  ListAIWorkbenchMCPsResponse,
  SkillInfo,
  ListAIWorkbenchSkillsResponse,
  TeamsWorkflowRobotNoticeTmplMatcher,
  DescribeNoticeContentTmplResponse,
  ListAIWorkbenchResourceMapsRequest,
  ListAIWorkbenchArtifactsResponse,
  CancelAIWorkbenchChatRequest,
  DescribeAlarmNotifyHistoriesResponse,
  InstructionConfig,
  DeleteAIWorkbenchTaskResponse,
  DescribeAIWorkbenchSREDigitalTwinTaskListResponse,
  DescribeAIWorkbenchSessionResponse,
  WeWorkRobotNoticeTmpl,
  TriggerAIWorkbenchTaskRequest,
  DescribeNoticeContentTmplRequest,
  ListAIWorkbenchMessagesResponse,
  TaskInfo,
  ListAIWorkbenchArtifactsRequest,
  CreateAIWorkbenchAgentResponse,
  DeleteNoticeContentTmplsRequest,
  PageByNoParams,
  ListAIWorkbenchResourceInstancesRequest,
  ChannelsReceivers,
  CreateAIWorkbenchTaskResponse,
  DescribeAIWorkbenchExecutionRequest,
  DescribeAIWorkbenchSREDigitalTwinTaskListRequest,
  AIWorkbenchSREDigitalTwinWorkLogList,
  ListAIWorkbenchExecutionsRequest,
  DescribeAIWorkbenchSkillResponse,
  AlarmLable,
  PageByNumResult,
  CreateAIWorkbenchAgentRequest,
  EnvEntry,
  ListAIWorkbenchResourceMapsResponse,
  QCloudYeheNoticeTmplMatcher,
  ListAIWorkbenchMessagesRequest,
  QCloudYeheNoticeTmplItem,
  ListAIWorkbenchExecutionsResponse,
  DescribeAIWorkbenchAgentRequest,
  GoogleChatRobotNoticeTmpl,
  ArtifactInfo,
  ListAIWorkbenchResourceInstancesResponse,
  NotifyRelatedNotice,
  DescribeAIWorkbenchSkillRequest,
  GoogleChatRobotNoticeTmplMatcher,
  MessageInfo,
  QCloudYeheNoticeTmpl,
  MCPInfo,
  CreateNoticeContentTmplRequest,
  ListAIWorkbenchTasksRequest,
  WebhookNoticeTmplMatcher,
  DescribeAIWorkbenchSREDigitalTwinWorkLogDetailResponse,
  DescribeAIWorkbenchAgentResponse,
  ExecutionInfo,
  GetAIWorkbenchArtifactDownloadURLResponse,
  PagerDutyRobotNoticeTmplHeader,
  NoticeContentTmplBindPolicyCount,
  TriggerAIWorkbenchSREDigitalTwinTaskRequest,
  DescribeAIWorkbenchSREDigitalTwinWorkLogListResponse,
  CreateAIWorkbenchTaskRequest,
  DescribeAIWorkbenchArtifactResponse,
  CancelAIWorkbenchChatResponse,
  ModifyNoticeContentTmplResponse,
  WeWorkRobotNoticeTmplMatcher,
  ContentBlockInfo,
  PagerDutyRobotNoticeTmplMatcher,
  FeiShuRobotNoticeTmpl,
  ListAIWorkbenchAgentsRequest,
  DeleteNoticeContentTmplsResponse,
  AIWorkbenchSREDigitalTwinTaskList,
  UpdateAIWorkbenchAgentRequest,
  ModifyNoticeContentTmplRequest,
  EnvVar,
} from "./monitor_models"

/**
 * monitor client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("monitor.tencentcloudapi.com", "2023-06-16", clientConfig)
  }

  /**
   * 查询执行详情
   */
  async DescribeAIWorkbenchExecution(
    req: DescribeAIWorkbenchExecutionRequest,
    cb?: (error: string, rep: DescribeAIWorkbenchExecutionResponse) => void
  ): Promise<DescribeAIWorkbenchExecutionResponse> {
    return this.request("DescribeAIWorkbenchExecution", req, cb)
  }

  /**
   * 查询消息列表
   */
  async ListAIWorkbenchMessages(
    req: ListAIWorkbenchMessagesRequest,
    cb?: (error: string, rep: ListAIWorkbenchMessagesResponse) => void
  ): Promise<ListAIWorkbenchMessagesResponse> {
    return this.request("ListAIWorkbenchMessages", req, cb)
  }

  /**
   * 根据查询条件获取自定义通知内容模板，若所有查询条件空，则获取账号下所有模板
   */
  async DescribeNoticeContentTmpl(
    req: DescribeNoticeContentTmplRequest,
    cb?: (error: string, rep: DescribeNoticeContentTmplResponse) => void
  ): Promise<DescribeNoticeContentTmplResponse> {
    return this.request("DescribeNoticeContentTmpl", req, cb)
  }

  /**
   * 查询会话列表
   */
  async ListAIWorkbenchSessions(
    req: ListAIWorkbenchSessionsRequest,
    cb?: (error: string, rep: ListAIWorkbenchSessionsResponse) => void
  ): Promise<ListAIWorkbenchSessionsResponse> {
    return this.request("ListAIWorkbenchSessions", req, cb)
  }

  /**
   * 查询任务列表
   */
  async ListAIWorkbenchTasks(
    req: ListAIWorkbenchTasksRequest,
    cb?: (error: string, rep: ListAIWorkbenchTasksResponse) => void
  ): Promise<ListAIWorkbenchTasksResponse> {
    return this.request("ListAIWorkbenchTasks", req, cb)
  }

  /**
   * 查询技能详情
   */
  async DescribeAIWorkbenchSkill(
    req: DescribeAIWorkbenchSkillRequest,
    cb?: (error: string, rep: DescribeAIWorkbenchSkillResponse) => void
  ): Promise<DescribeAIWorkbenchSkillResponse> {
    return this.request("DescribeAIWorkbenchSkill", req, cb)
  }

  /**
   * 取消对话执行
   */
  async CancelAIWorkbenchChat(
    req: CancelAIWorkbenchChatRequest,
    cb?: (error: string, rep: CancelAIWorkbenchChatResponse) => void
  ): Promise<CancelAIWorkbenchChatResponse> {
    return this.request("CancelAIWorkbenchChat", req, cb)
  }

  /**
   * 查询 Agent 详情
   */
  async DescribeAIWorkbenchAgent(
    req: DescribeAIWorkbenchAgentRequest,
    cb?: (error: string, rep: DescribeAIWorkbenchAgentResponse) => void
  ): Promise<DescribeAIWorkbenchAgentResponse> {
    return this.request("DescribeAIWorkbenchAgent", req, cb)
  }

  /**
   * 查询技能列表
   */
  async ListAIWorkbenchSkills(
    req: ListAIWorkbenchSkillsRequest,
    cb?: (error: string, rep: ListAIWorkbenchSkillsResponse) => void
  ): Promise<ListAIWorkbenchSkillsResponse> {
    return this.request("ListAIWorkbenchSkills", req, cb)
  }

  /**
   * 列出资源实例
   */
  async ListAIWorkbenchResourceInstances(
    req: ListAIWorkbenchResourceInstancesRequest,
    cb?: (error: string, rep: ListAIWorkbenchResourceInstancesResponse) => void
  ): Promise<ListAIWorkbenchResourceInstancesResponse> {
    return this.request("ListAIWorkbenchResourceInstances", req, cb)
  }

  /**
   * 创建自定义通知内容模板
   */
  async CreateNoticeContentTmpl(
    req: CreateNoticeContentTmplRequest,
    cb?: (error: string, rep: CreateNoticeContentTmplResponse) => void
  ): Promise<CreateNoticeContentTmplResponse> {
    return this.request("CreateNoticeContentTmpl", req, cb)
  }

  /**
   * 触发数字分身任务请求
   */
  async TriggerAIWorkbenchSREDigitalTwinTask(
    req: TriggerAIWorkbenchSREDigitalTwinTaskRequest,
    cb?: (error: string, rep: TriggerAIWorkbenchSREDigitalTwinTaskResponse) => void
  ): Promise<TriggerAIWorkbenchSREDigitalTwinTaskResponse> {
    return this.request("TriggerAIWorkbenchSREDigitalTwinTask", req, cb)
  }

  /**
   * 查询 MCP 列表
   */
  async ListAIWorkbenchMCPs(
    req: ListAIWorkbenchMCPsRequest,
    cb?: (error: string, rep: ListAIWorkbenchMCPsResponse) => void
  ): Promise<ListAIWorkbenchMCPsResponse> {
    return this.request("ListAIWorkbenchMCPs", req, cb)
  }

  /**
   * 删除 Agent
   */
  async DeleteAIWorkbenchAgent(
    req: DeleteAIWorkbenchAgentRequest,
    cb?: (error: string, rep: DeleteAIWorkbenchAgentResponse) => void
  ): Promise<DeleteAIWorkbenchAgentResponse> {
    return this.request("DeleteAIWorkbenchAgent", req, cb)
  }

  /**
   * 查询会话详情
   */
  async DescribeAIWorkbenchSession(
    req: DescribeAIWorkbenchSessionRequest,
    cb?: (error: string, rep: DescribeAIWorkbenchSessionResponse) => void
  ): Promise<DescribeAIWorkbenchSessionResponse> {
    return this.request("DescribeAIWorkbenchSession", req, cb)
  }

  /**
   * 删除任务
   */
  async DeleteAIWorkbenchTask(
    req: DeleteAIWorkbenchTaskRequest,
    cb?: (error: string, rep: DeleteAIWorkbenchTaskResponse) => void
  ): Promise<DeleteAIWorkbenchTaskResponse> {
    return this.request("DeleteAIWorkbenchTask", req, cb)
  }

  /**
   * 创建 Agent
   */
  async CreateAIWorkbenchAgent(
    req: CreateAIWorkbenchAgentRequest,
    cb?: (error: string, rep: CreateAIWorkbenchAgentResponse) => void
  ): Promise<CreateAIWorkbenchAgentResponse> {
    return this.request("CreateAIWorkbenchAgent", req, cb)
  }

  /**
   * 按需查询告警的通知历史
   */
  async DescribeAlarmNotifyHistories(
    req: DescribeAlarmNotifyHistoriesRequest,
    cb?: (error: string, rep: DescribeAlarmNotifyHistoriesResponse) => void
  ): Promise<DescribeAlarmNotifyHistoriesResponse> {
    return this.request("DescribeAlarmNotifyHistories", req, cb)
  }

  /**
   * 查询制品详情
   */
  async DescribeAIWorkbenchArtifact(
    req: DescribeAIWorkbenchArtifactRequest,
    cb?: (error: string, rep: DescribeAIWorkbenchArtifactResponse) => void
  ): Promise<DescribeAIWorkbenchArtifactResponse> {
    return this.request("DescribeAIWorkbenchArtifact", req, cb)
  }

  /**
   * 查询产物列表
   */
  async ListAIWorkbenchArtifacts(
    req: ListAIWorkbenchArtifactsRequest,
    cb?: (error: string, rep: ListAIWorkbenchArtifactsResponse) => void
  ): Promise<ListAIWorkbenchArtifactsResponse> {
    return this.request("ListAIWorkbenchArtifacts", req, cb)
  }

  /**
   * 手动触发任务
   */
  async TriggerAIWorkbenchTask(
    req: TriggerAIWorkbenchTaskRequest,
    cb?: (error: string, rep: TriggerAIWorkbenchTaskResponse) => void
  ): Promise<TriggerAIWorkbenchTaskResponse> {
    return this.request("TriggerAIWorkbenchTask", req, cb)
  }

  /**
   * 创建任务
   */
  async CreateAIWorkbenchTask(
    req: CreateAIWorkbenchTaskRequest,
    cb?: (error: string, rep: CreateAIWorkbenchTaskResponse) => void
  ): Promise<CreateAIWorkbenchTaskResponse> {
    return this.request("CreateAIWorkbenchTask", req, cb)
  }

  /**
   * 查询执行列表
   */
  async ListAIWorkbenchExecutions(
    req: ListAIWorkbenchExecutionsRequest,
    cb?: (error: string, rep: ListAIWorkbenchExecutionsResponse) => void
  ): Promise<ListAIWorkbenchExecutionsResponse> {
    return this.request("ListAIWorkbenchExecutions", req, cb)
  }

  /**
   * 查询AI工作台SRE数字分身任务工作日志列表
   */
  async DescribeAIWorkbenchSREDigitalTwinWorkLogList(
    req: DescribeAIWorkbenchSREDigitalTwinWorkLogListRequest,
    cb?: (error: string, rep: DescribeAIWorkbenchSREDigitalTwinWorkLogListResponse) => void
  ): Promise<DescribeAIWorkbenchSREDigitalTwinWorkLogListResponse> {
    return this.request("DescribeAIWorkbenchSREDigitalTwinWorkLogList", req, cb)
  }

  /**
   * 查询AI工作台SRE数字分身任务列表
   */
  async DescribeAIWorkbenchSREDigitalTwinTaskList(
    req: DescribeAIWorkbenchSREDigitalTwinTaskListRequest,
    cb?: (error: string, rep: DescribeAIWorkbenchSREDigitalTwinTaskListResponse) => void
  ): Promise<DescribeAIWorkbenchSREDigitalTwinTaskListResponse> {
    return this.request("DescribeAIWorkbenchSREDigitalTwinTaskList", req, cb)
  }

  /**
   * 删除通知内容模板
   */
  async DeleteNoticeContentTmpls(
    req: DeleteNoticeContentTmplsRequest,
    cb?: (error: string, rep: DeleteNoticeContentTmplsResponse) => void
  ): Promise<DeleteNoticeContentTmplsResponse> {
    return this.request("DeleteNoticeContentTmpls", req, cb)
  }

  /**
   * 查询AI工作台SRE数字分身工作日志详细信息
   */
  async DescribeAIWorkbenchSREDigitalTwinWorkLogDetail(
    req: DescribeAIWorkbenchSREDigitalTwinWorkLogDetailRequest,
    cb?: (error: string, rep: DescribeAIWorkbenchSREDigitalTwinWorkLogDetailResponse) => void
  ): Promise<DescribeAIWorkbenchSREDigitalTwinWorkLogDetailResponse> {
    return this.request("DescribeAIWorkbenchSREDigitalTwinWorkLogDetail", req, cb)
  }

  /**
   * 更新 Agent
   */
  async UpdateAIWorkbenchAgent(
    req: UpdateAIWorkbenchAgentRequest,
    cb?: (error: string, rep: UpdateAIWorkbenchAgentResponse) => void
  ): Promise<UpdateAIWorkbenchAgentResponse> {
    return this.request("UpdateAIWorkbenchAgent", req, cb)
  }

  /**
   * 查询 Agent 列表
   */
  async ListAIWorkbenchAgents(
    req: ListAIWorkbenchAgentsRequest,
    cb?: (error: string, rep: ListAIWorkbenchAgentsResponse) => void
  ): Promise<ListAIWorkbenchAgentsResponse> {
    return this.request("ListAIWorkbenchAgents", req, cb)
  }

  /**
   * 查询资源地图列表
   */
  async ListAIWorkbenchResourceMaps(
    req: ListAIWorkbenchResourceMapsRequest,
    cb?: (error: string, rep: ListAIWorkbenchResourceMapsResponse) => void
  ): Promise<ListAIWorkbenchResourceMapsResponse> {
    return this.request("ListAIWorkbenchResourceMaps", req, cb)
  }

  /**
   * 修改通知内容模板
   */
  async ModifyNoticeContentTmpl(
    req: ModifyNoticeContentTmplRequest,
    cb?: (error: string, rep: ModifyNoticeContentTmplResponse) => void
  ): Promise<ModifyNoticeContentTmplResponse> {
    return this.request("ModifyNoticeContentTmpl", req, cb)
  }

  /**
   * 获取AI工作台制品的下载地址
   */
  async GetAIWorkbenchArtifactDownloadURL(
    req: GetAIWorkbenchArtifactDownloadURLRequest,
    cb?: (error: string, rep: GetAIWorkbenchArtifactDownloadURLResponse) => void
  ): Promise<GetAIWorkbenchArtifactDownloadURLResponse> {
    return this.request("GetAIWorkbenchArtifactDownloadURL", req, cb)
  }
}
