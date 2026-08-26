# Beyond Persona Prompting: A Cognitive-Process-Based Framework for ADHD Student Simulation with Large Language Models

**Main Research Question**

> Can CPB provide a theory-consistent and traceable representation of ADHD-related learning processes, and how do its behavioural consistency and representational robustness compare with persona prompting?

**RQ1 — Mechanism**

> Does the CPB processing pipeline produce intended and traceable transitions from instructional information, through attention, working-memory processing and encoding, to the downstream knowledge state?

**RQ2 — Representation**

> Compared with persona prompting, does CPB produce learning behaviour that shows more theoretically consistent sensitivity to controlled distraction and processing demand?

**RQ3 — Multidimensional Robustness**

> When additional functionally heterogeneous learner characteristics are introduced, does a factorised CPB representation preserve learning-related patterns and constraint structure more consistently than joint persona prompting?

## Abstract Page

## Acknowledgements

## Acronyms

## Contents

## 1  Introduction

### 1.1 Background and Motivation

### 1.2 The Representation Problem

### 1.3 ADHD Student Simulation as the Research Case

### 1.4 Research Aim and Research Questions

### 1.5 Research Objectives

### 1.6 Contributions

### 1.7 Thesis Structure

## 2  Related Work and Background

### 2.1 LLM-Based Student Simulation

### 2.2 Persona Prompting for Learner Representation

### 2.3 neurodivergent student simulation

### 2.4 ADHD-Related Characteristics and Learning Processes

### 2.5 Process- and State-Based Approaches to Learner Modelling

### 2.6 Evaluation of Simulated Learners and Learning Outcomes

#### 2.6.1 Evaluation of Learner Simulation and Persona Fidelity

#### 2.6.2 Rubric-Based Short Answer Assessment

#### 2.6.3 LLM-as-a-Judge and Checklist-Based Evaluation

### 2.7 Explicit Knowledge States, Process Transparency and Traceability

### 2.8 Research Gap and Design Requirements

## 3  Materials and Methods

### 3.1 Overall Experimental Framework

#### 3.1.1 Overall Research Workflow

![image-20260826103519140](/Users/willow/Library/Application Support/typora-user-images/image-20260826103519140.png)

#### 3.1.1.1 Teaching Phase

#### 3.1.1.2 Assessment Phases

### 3.2 Shared Instructional and Assessment Resources

#### 3.2.1 Source Instructional Materials

#### 3.2.2 Text Preprocessing and Teaching-Round Segmentation

#### 3.2.3 Instructional Processing-Demand Annotation and Item Selection

3.2.3.x Processing-Demand Estimator Sensitivity

#### 3.2.4 Question Construction and Candidate Eligibility

#### 3.2.5 Question-Targeted Distractor Construction and Assignment

#### 3.2.6 Scoring Rubric and Atomic Checklist Criteria

##### 3.2.6.1 Theoretical Foundations of Criterion-Level Evaluation

开放式学生回答的评价不能仅依赖回答与参考答案之间的词汇重叠。学生可能通过有效的同义改写表达已经掌握的知识，也可能只保留一个多要素答案中的部分信息，或明确陈述与教材内容相冲突的关系。对于这些情况，单一的整体文本相似度很难稳定区分“语义正确但措辞不同”“部分知识缺失”以及“明确概念冲突”等不同回答状态。因此，本研究采用 criterion-level LLM evaluation，并不将其视为某一既有方法的直接复现，而是基于一条逐步收紧的 methodological evidence chain：首先确认 LLM 能够在结构化协议下执行评价任务，随后限制这一能力的可信边界，再通过 rubric decomposition 将整体判断转化为范围更明确的局部决策，最终将这一思路落实到教育短答案评分场景中。

这一方法的起点来自结构化 LLM evaluation 的研究。G-Eval 并非简单要求模型对生成文本给出一个无约束的整体印象分，而是向模型提供任务特定的评价标准、明确的评价步骤以及结构化的 form-filling 输出，并在摘要评价任务中取得了较强的人类判断相关性[liu-etal-2023-g]。这一结果说明，LLM 可以不仅作为文本生成器，也可以在评价标准和判断过程被显式规定时充当协议驱动的 evaluator。对本研究而言，这提供了最基本的方法依据：评分标准不必完全隐含在 Judge 的内部判断中，而可以作为显式输入，使 Judge 围绕预定义的知识要求进行判断。

然而，能够执行评价任务并不意味着 LLM Judge 可以被默认视为可靠。LLM-Rubric 的研究表明，未经校准的 LLM judgments 并不会自动与人类评价保持稳定一致；该方法通过多维 rubric 以及额外的 calibration mechanism 提升预测质量[hashemi-etal-2024-llm]。本研究并未复现其额外的神经校准网络，但采纳了其中更重要的方法学原则：**LLM Judge 的可靠性必须针对具体任务建立，而不能仅由模型能力本身推定。** 因此，评价维度需要被明确操作化，候选 Judge 需要经过比较，固定输入下的重复性需要被检验，并最终通过独立人工评价建立与当前评分任务相匹配的外部验证证据。

在这一可靠性要求之上，下一步问题是如何减少开放式整体评分本身的判断模糊性。CheckEval 将宽泛的主观评价任务进一步分解为一系列范围有限的 binary checklist decisions，并在跨模型实验中发现，这种分解能够提高 evaluator agreement、降低评分方差，同时使单项判断更加容易追踪[lee-etal-2025-checkeval]。这一思路与本研究的评分需求高度一致。与其要求 Judge 直接判断一个回答“整体上值多少分”，本研究首先将每道题所要求的知识拆分为若干 atomic criteria，使每次 Judge decision 只需要回答一个范围明确的问题：学生回答是否表达了该 criterion 所要求的知识。这样，部分知识掌握可以通过不同 criteria 上的独立结果表现出来，而不需要依赖一个模糊的整体“partial credit”判断。

这种 criterion decomposition 在教育短答案评价中也具有直接的任务依据。有研究将显式 rubric information 注入 short-answer grading model，并报告了相对于不使用 rubric information 方法的性能提升[wang-etal-2019-inject]。这一结果表明，rubric 并不是通用文本评价之外的附加说明，而是教育评分任务本身的重要信息来源：评分器需要明确知道一个回答应当表达哪些知识要素，而不能仅依据学生答案与参考答案在表面措辞上的相似程度推断成绩。对本研究而言，这进一步支持将 source-grounded rubric 拆分为可逐项检验的知识标准，而不是让 Judge 自行从 reference answer 中推测评分要求。

近期 rubric-based educational assessment benchmark 则为这一设计提供了更直接的当代证据。BEA 2026 Rubric-based Short Answer Scoring Shared Task 将任务明确设定为依据 textual scoring rubric 对 student answers 进行评分，并同时考察系统在已见和未见问题上的泛化能力[gombert-etal-2026-report]。官方综述显示，结构化且针对任务进行适配的 LLM-based systems 在多个赛道中取得了较强表现；表现最优的系统进一步采用了 rubric-aware input structuring、checklist-style reasoning、decision-tree reframing 以及 ensemble voting 等策略。该结果并不能推出任意 LLM Judge 都具有可靠的教育评分能力，但它进一步强化了一个与本研究一致的方法方向：**评分应显式操作化 rubric semantics，并将复杂的整体判断拆解为结构化、局部且可追踪的决策。**

基于上述证据，本研究将这些原则整合为一条冻结的 criterion-level scoring pipeline (Figure 3.a)：

![image-20260826105118511](/Users/willow/Library/Application Support/typora-user-images/image-20260826105118511.png)

/Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter3/export/ch03_criterion_scoring_pipeline.png

具体而言，每个 atomic criterion 均由 Judge 独立判断，而不是直接生成整体分数。Criterion-level 输出采用能够支持 binary credit aggregation 的结构化标签，同时保留 diagnostic error distinction，以区分知识缺失与明确冲突。最终 question score 不由 Judge 自由决定，而是根据冻结的 criterion labels 通过确定性的程序规则进行聚合。由此，LLM 的作用被限制在局部语义判断层面，而评分结构、权重和总分计算均保持显式且可复现。

在评分表示层面，每道题首先由参考答案确定其语义要求，再将其转写为若干可独立评分的criteria，并将每条criterion绑定至冻结教材中的来源证据：

\[
\text{Reference Answer}
\rightarrow
\text{Semantic Propositions}
\rightarrow
\text{Atomic Checklist Criteria}
\rightarrow
\text{Source Evidence}.
\]

这里的“atomic”是本研究中的操作性定义。每条criterion表示一项可以独立评分的教学命题，而不表示语言学上唯一或不可继续拆分的原子事实。同一道题内的criteria应当能够独立理解、尽量避免语义重叠，并在整体上覆盖参考答案要求表达的知识。每条criterion均与冻结教材中的原文证据片段对应。因此，checklist不会引入教材中没有出现的新知识，每项判断也能够追溯到具体的教学来源。

本研究区分三类criterion-level结果：

- **Correct：**学生回答明确陈述或直接蕴含criterion所要求的全部主体、关系、对象、条件、结果、比较和限制词；
- **Absent：**一个或多个必要组成部分缺失、含义不明确、只通过相关主题被间接暗示，或者只被提及但没有作为答案主张；
- **Contradicted：**学生明确陈述了与criterion相冲突的命题。

该区分保留了“没有表达”与“明确表达错误知识”之间的诊断差异。`Absent`和`Contradicted`均不能获得该criterion的分数，但错误类型会保留在评分记录中。部分知识则通过多条criteria的满足情况体现：例如，一个包含三条criteria的问题中，学生满足其中两条而遗漏一条时，系统能够记录其保留了哪两项知识，而不需要由Judge主观选择一个中间Likert等级。

##### 3.2.6.2 Rubric Construction and Deterministic Score Calculation

评分量规和checklist在正式学生回答生成与评分之前完成构建、复核并冻结，LLM Judge无权在评分过程中生成或修改评分要求。每道评估题以结构化记录存储，包括唯一问题编号、问题范围、题型、问题文本、参考答案、来源教学轮次、来源句子编号，以及由若干原子化criteria组成的checklist。每条criterion进一步包含唯一的`criterion_id`、需要表达的命题、来源句子编号和支持该命题的原文证据片段。Independent question对应一个冻结教学轮次，integrative question则要求整合多个教学轮次中的知识。七篇教材中的题目均采用相同的数据结构，并在冻结前核对问题、参考答案、checklist、来源编号和证据片段之间的一致性。

评分时，LLM Judge只接收以下信息：

\[
\{
\text{question ID},
\text{question},
\text{reference answer},
\text{checklist criteria},
\text{source-evidence spans},
\text{student answer}
\}.
\]

发送给Judge的payload不包含学生身份、模拟条件、教材标签、demand group、Processing Demand Bits、记忆状态、Attention状态、WM capacity或其他实验元数据。只有当Judge输出通过结构校验后，这些本地元数据才会重新与评分结果连接。该blind evaluation设计避免Judge根据某类模拟学生的预期表现或实验条件推断其应得分数。

Judge不直接生成数值分数，而是独立地为每条criterion输出`Correct`、`Absent`或`Contradicted`。对于`Correct`或`Contradicted`，Judge还必须从学生回答中复制能够支持判断的最短连续原文片段；对于`Absent`，evidence必须为null。输出契约禁止Judge新增、删除、合并、拆分或重新定义criteria。Judge同时被要求忽略回答长度、表达风格、流畅度、语法、词汇、信心水平、格式和重复内容，只判断学生实际主张的语义命题。

Judge返回的criterion identifiers和evidence spans通过本地程序校验后，Python确定性地计算问题分数。对于包含\(K_q\)条criteria的问题\(q\)：

\[
Score_q
=
10
\times
\frac{
\sum_{k=1}^{K_q}
\mathbb{I}(y_{qk}=\mathrm{Correct})
}{K_q},
\]

其中，\(y_{qk}\)表示第\(k\)条criterion的标签，\(\mathbb{I}(\cdot)\)为指示函数。`Absent`与`Contradicted`均贡献0分，但二者的标签被保留用于错误类型分析。该方法在0–10范围内生成标准化问题得分，同时保留学生具体掌握或遗漏了哪些知识组成部分的信息。

##### 3.2.6.3 Criterion-Level LLM-as-a-Judge Scoring and Validation

在冻结正式 Judge 之前，本研究比较了两个候选评价模型：Alibaba Cloud 的 `qwen3.7-max` 与 OpenAI 的 `gpt-5.6-sol`。选择 Qwen 系列作为主要候选，主要基于其与本研究任务具有较强的一致性先验。BEA 2026 Rubric-based Short Answer Scoring Shared Task 直接考察了依据 textual rubrics 对开放式 student answers 进行评分的任务，与本研究的 criterion-level short-answer evaluation 高度相似；其中表现最强的系统采用了结合 rubric-aware input structuring 和 checklist-style reasoning的 Qwen-based models[gombert2026report; belcher2026iwm]。并且，Qwen2.5-72B 在一项多模型 extractive-QA Judge comparison 中表现出最高的人类判断相关性 [ho2025llm]。因此，Qwen family 提供了一个具有已有 Judge precedent 的候选基础。本研究进一步采用 Alibaba Cloud 在 Qwen3.7 系列中能力最高的 `qwen3.7-max` 作为其高能力实现。作为独立对照，本研究同时选择 frontier reasoning model `gpt-5.6-sol`，以减少正式 Judge 的选择仅依赖单一模型家族的风险。最终 Judge 的选择仍依据本研究自身的重复性与验证结果，而不是直接由外部 benchmark 决定。

两个候选模型的比较实验使用同一份冻结Judge Prompt、问题、参考答案、source-grounded criteria和学生回答，对相同的49份未进行知识学习的Pre-Knowledge Baseline模拟学生的回答进行评价，该回答与后续模拟学生采用同样的`DeepSeek V4-Flash`模型生成。该样本包括42道independent questions、7道integrative questions。每个模型独立评价每道回答三次：
\[
49\ \text{answers}
\times
3\ \text{repetitions}
=
147\ \text{Judge calls per model}.
\]

因此，模型比较共包含294条通过输出契约验证的Judge记录。

**表1　Qwen与GPT criterion-level评分的直接比较**

| 指标 | Qwen3.7-max | GPT-5.6-sol | 模型间比较 |
|---|---:|---:|---:|
| Overall mean question score | 7.823 | 7.993 | Qwen − GPT = −0.170 |
| Modal `Correct` criteria | 106/137 | 108/137 | −2 |
| Modal `Absent` criteria | 31/137 | 29/137 | +2 |
| Exact question-score agreement | — | — | 77.55% |
| Mean absolute question-score difference | — | — | 0.941 |
| Question-score Pearson correlation | — | — | 0.703 |
| Criterion-label agreement | — | — | 89.78% |
| Criterion-level Cohen’s \(\kappa\) | — | — | 0.701 |

两个模型的整体均分只相差0.170分，但77.55%的题目得分完全一致率表明，整体均值接近不等于题目层面的判断完全相同。两模型在89.78%的modal criterion labels上保持一致，对应Cohen’s \(\kappa=0.701\)。Qwen比GPT多判定了两条`Absent` criterion，并得到略低的总体均分，说明Qwen在当前Prompt下采用了稍保守的语义蕴含边界。但是，这一分数差异只作为模型行为的描述，而不是选择Judge的主要依据。

模型选择的主要标准是在冻结评分协议下的重复测量稳定性。在产生模型比较结果前，本研究预先规定了七项通过标准：全部调用的output schema、criterion set与student-evidence spans必须有效；总体criterion-label unanimity不得低于0.95；pairwise criterion agreement不得低于0.97；exact question-score invariance不得低于0.90；absolute-agreement \(\operatorname{ICC}(A,1)\)不得低于0.95；三次重复的overall mean score最大差值不得超过0.10分；并且七篇教材中最低的lesson-level criterion unanimity不得低于0.90。这样，整体一致性不能掩盖某一篇教材上的局部不稳定。

**表2　候选Judge模型的三轮稳定性与预设阈值检验**

| 稳定性指标 | 预设通过标准 | Qwen3.7-max | GPT-5.6-sol | Qwen − GPT |
|---|---:|---:|---:|---:|
| Schema、criterion-set与evidence validity | = 1.0000 | 1.0000 | 1.0000 | 0.0000 |
| Overall criterion-label unanimity | ≥ 0.9500 | 1.0000 | 0.9781 | +0.0219 |
| Pairwise criterion agreement | ≥ 0.9700 | 1.0000 | 0.9854 | +0.0146 |
| Exact question-score invariance | ≥ 0.9000 | 1.0000 | 0.9388 | +0.0612 |
| \(\operatorname{ICC}(A,1)\) | ≥ 0.9500 | 1.0000 | 0.9700 | +0.0300 |
| Maximum replicate-mean difference | ≤ 0.1000 | 0.0000 | 0.2041 | −0.2041 |
| Minimum lesson-level criterion unanimity | ≥ 0.9000 | 1.0000 | 0.9474 | +0.0526 |
| 通过的预设标准数 | — | 7/7 | 6/7 | — |

Qwen在三次重复评价中产生了完全相同的criterion labels和question scores。GPT整体稳定性仍然较高，但其maximum replicate-mean difference为0.2041，超过预先设定的0.10上限；三道GPT评分问题中分别有一条criterion在三次调用间出现`Absent–Correct–Absent`的变化。

由于integrative questions要求评价模型判断跨多个教学信息组成部分的回答，本研究进一步单独检查了这类题目的稳定性。

**表3　七道integrative questions的评分稳定性**

| Integrative-question指标 | Qwen3.7-max | GPT-5.6-sol |
|---|---:|---:|
| Criterion-label unanimity | 1.0000 | 0.9524 |
| Pairwise criterion agreement | 1.0000 | 0.9683 |
| Exact question-score invariance | 1.0000 | 0.8571 |
| ICC(A,1) | 1.0000 | 0.9231 |
| Maximum replicate-mean difference | 0.0000 | 0.4762 |

该结果表明，GPT的残余不稳定性在integrative questions中更明显：exact question-score invariance下降至85.71%，ICC(A,1)下降至0.9231，maximum replicate-mean difference增加至0.4762。Qwen在七道integrative questions中仍保持完全一致。

为补充模型内部稳定性和模型间一致性分析，本研究还进行了离线逐criterion人工评分。Human Validation由一名获得经济学专业学士学位的学生在相同数据集和评分标准下独立评分。人工评分在不知道 LLM labels 的情况下完成。LLM Judge与Human Validation的一致性结果如表4所示。

**表4　候选LLM Judge与Human Validation的一致性**

| 比较 | Raw criterion agreement | Cohen’s \(\kappa\) |
|---|---:|---:|
| Human Validation vs Qwen3.7-max | 84.67% | 0.441 |
| Human Validation vs GPT-5.6-sol | 86.13% | 0.471 | 

两个候选Judge与离线复核均达到中等程度的chance-corrected agreement，GPT的数值略高于Qwen。分歧主要集中在：学生回答是否已经明确表达了criterion所要求的完整关系，还是只提供了相关概念、例子或较宽泛的同义表述。

综合确认性实验结果，本研究冻结`qwen3.7-max`作为正式的operational Judge。主要原因是Qwen通过了全部七项预先设定的重复稳定性阈值，并在三轮调用中保持criterion labels和question scores完全不变。这一点对于后续大规模单次Judge调用尤其重要：如果评价模型本身存在明显随机波动，评分噪声可能与不同模拟学生条件之间的差异混合。但需要注意的是，由于其与人工评分之间的 Cohen’s \(\kappa\) 仍然偏低，当前证据并不足以进一步声称其具有更高的人类效度。

Qwen 较为保守的判定边界使其总体评分略低，但在本研究这一高基线、容易出现高分聚集的任务中，这种严格性反而具有区分度优势：它减少了量表上端的分数压缩，保留了更多用于区分不同学习条件的评分空间，从而降低 ceiling compression 掩盖真实学习差异的风险。

### 3.3 Learner Representation: Persona Prompting versus CPB

#### 3.3.1 Representation-Level Comparison

#### 3.3.2 Persona-Prompted Learner Procedure

#### 3.3.3 CPB Learner Procedure

### 3.4 Cognitive-Process-Based Mechanisms

![image-20260825134108613](/Users/willow/Library/Application Support/typora-user-images/image-20260825134108613.png)

<img src="/Users/willow/Library/Application Support/typora-user-images/image-20260825134705833.png" alt="image-20260825134705833" style="zoom:20%;" />

如 Figure 3.X 所示，CPB 将教学过程表示为一系列显式的信息状态转换。对于每个 teaching round，冻结的 instructional source Sr 首先进入 Attention Filter，产生经过注意阶段后仍保持可用的 post-Attention input Pr,c。该信息随后进入 Working-Memory processing stage，根据 instructional processing demand 与条件特定的 WM capacity 进一步受到限制，形成可供后续编码的 available input Ar,c。Available input 随后由所有实验条件共享的 Knowledge Encoder 转换为显式 long-term memory Lr,c。如Figure 3.X所示，在 assessment phase，CPB learner 不再访问原始教学材料，而是仅基于 accumulated explicit LTM 和当前 assessment question 生成回答。由此，CPB 的学习过程可以被表示为 Sr→Pr,c→Ar,c→Lr,c 的连续信息状态转换，其中 Attention 和 Working Memory 构成主要的 ADHD-related experimental constraints，而 Knowledge Encoding 作为共同的 downstream stage 保持一致。

#### 3.4.1 Attention Filter

##### 3.4.1.1 Theoretical Motivation and Functional Role

ADHD-related attentional difficulties are frequently associated with increased susceptibility to task-irrelevant or salient stimuli. Aboitiz et al. (2014) [REF:aboitiz2014irrelevant]将 distractibility 概括为 ADHD 的重要表现之一，即个体在执行 goal-directed task 时，注意焦点更容易转向与当前行为无关的刺激，并将其与对 irrelevant information 的控制不足联系起来。实验研究也提供了相应证据。例如，Gumenyuk et al. (2005)  [REF:gumenyuk2005electrophysiological]发现，在 visual discrimination task 中加入 task-irrelevant novel sounds 后，ADHD 儿童出现更多 omission responses，并表现出与 involuntary attention control 异常相关的 ERP differences。类似地，Schneidt et al. (2018)  [REF:schneidt2018distraction]在 ADHD 成人中发现了较高的 behavioural distractibility，并进一步表明 distractor processing 会受到 task difficulty 的调节。这些结果共同说明，ADHD-related attentional differences 可以表现为对外部干扰刺激更高的易感性。

然而，已有研究并不支持将 distraction 简化为一种必然导致表现下降的统一效应。Van Mourik et al. (2007)  [REF:van2007distraction]发现，虽然 ADHD 儿童对 novel sounds 表现出增强的 orienting response，但这些刺激在部分条件下反而减少了 omission errors，可能通过提高短时 arousal 改善 task performance。后续研究同样发现，task-irrelevant novel sounds 在特定实验条件下可以降低 omission errors、reaction times 和 reaction-time variability。因此，本研究不假设所有 distractors 都必然导致 ADHD learners 的信息损失，而是将 **susceptibility to controlled distraction** 作为一个有限且可操纵的 ADHD-related attentional characteristic。换言之，Attention Filter 并不是对完整 human attentional system 的模拟，而是对一种特定过程风险的计算抽象：当受控 distractor 成功触发注意中断时，与该事件相关的 task-relevant instructional information 可能无法继续进入后续 processing。

在 CPB 中，这一特征不是通过连续的“attention score”或 persona-level language instruction 表示，而是被操作化为 **downstream information availability**。其目的在于将类似 “this student is easily distracted” 的整体 persona 描述转换为显式且可追踪的 process variable：在给定 Teaching Round 中，一个预先定义的 target instructional unit 在 Attention mechanism 触发后是否仍可用于后续 processing。该设计与已有证据中 attention 与后续 information prioritisation 和 encoding 之间的联系保持一致。例如，Ortega et al. (2020) [REF:ortega2020neurocognitive] 报告 ADHD adolescents 在 attention-related encoding 和 retrieval processes 上表现出差异，并将其解释为对 relevant information prioritisation 的不足。需要强调的是，这些研究并不意味着人类 attention failure 会字面意义上“删除”教学内容；将 affected information 转换为 unavailable state 是本研究为实现可控、可追踪机制而采用的 study-specific computational operationalisation。

对于第 \(r\) 个 Teaching Round，Attention stage 的功能可以表示为：

\[
S_r \rightarrow P_{r,c},
\]

其中 \(S_r\) 表示冻结的 instructional source，而 \(P_{r,c}\) 表示条件 \(c\) 下经过 Attention processing 后仍可继续进入 Working-Memory Processing 的信息状态。若进一步区分插入 distractor 后实际呈现的 classroom input \(X_r\)，则该过程可更具体表示为：

\[
X_r
\xrightarrow{\mathrm{Attention}}
P^A_{r,c}.
\]

Attention Filter 的作用范围仅限于决定哪些 instructional information 能够继续进入 downstream processing。它不直接生成或修改 Explicit LTM，不直接决定最终 assessment answer，也不根据后续 assessment question 动态选择要影响的教学内容。通过这一功能边界，Attention 被表示为 CPB pipeline 中一个独立且可检查的信息状态转换阶段；下一节进一步说明该机制如何通过冻结的 distractor-to-target mapping 和 condition-specific trigger rule 实现。


##### 3.4.1.2 Attention Filter Implementation

Attention Filter 以 Teaching Round 为基本处理单位。对于每个包含预设 distractor 的 Teaching Round，系统首先判断 Attention mechanism 是否触发。该判断并不由 LLM 根据教学内容或 learner behaviour 动态决定，而是完全由实验条件中预先设定的 **Attention trigger probability** 控制。若该轮没有 distractor assignment，则 Attention 不会触发；若存在 distractor，则根据当前 CPB condition 对应的触发概率决定该事件是否导致目标教学信息变为 unavailable。

Study 1 使用两个确定性的边界条件：Attention OFF 的 trigger probability 为 0，因此任何 distractor 都不会导致信息移除；Attention ON 的 trigger probability 为 1，因此所有 eligible distractors 都会触发 Attention Filter。Study 2 中则使用 graded probabilities：CPB Zero、Low、Medium 和 High 分别对应 0、0.20、0.50 和 0.80 的 trigger probability，以表示逐步增强的 distraction susceptibility。对于概率介于 0 和 1 之间的条件，系统使用冻结随机种子生成可复现的 trigger decision，因此同一实验配置能够重复得到相同的 Attention trajectory。

| Condition | Trigger probability | Interpretation |
|---|---:|---|
| Attention OFF / CPB Zero | 0.00 | Distractor does not trigger information loss |
| Attention ON — Study 1 | 1.00 | Every eligible distractor triggers |
| CPB Low | 0.20 | Low distraction susceptibility |
| CPB Medium | 0.50 | Moderate distraction susceptibility |
| CPB High | 0.80 | High distraction susceptibility |

Attention 是否触发与“触发后影响哪一条教学信息”是两个独立步骤。每个 distractor 在材料构建阶段已经与一个固定的 `target_sentence_id` 配对，因此 learner model 不需要判断 distractor 会影响哪一句。当 Attention 未触发时，该 target sentence 保持可用；当 Attention 触发时，对应的 target sentence 被标记为 unavailable，并在正式实现中从后续 instructional input 中删除。Hard deletion 的选择及其 sensitivity analysis 在 Section 3.4.1.3 中进一步说明。

因此，Attention Filter 的实际逻辑可以概括为图3.X：

![image-20260825164313747](/Users/willow/Library/Application Support/typora-user-images/image-20260825164313747.png)

处理完成后，剩余的教学信息形成 post-Attention input \(P_{r,c}\)，并继续进入 Working-Memory Processing。系统同时记录 trigger status、被移除的 target sentence ID 以及处理后的 post-Attention input，以支持后续的 mechanism traceability 和 implementation-fidelity analysis。

##### 3.4.1.3 Operationalisation Sensitivity Check

直接删除 unavailable instructional content 在 NLP 中具有明确的方法学先例。Feng et al. (2018) [feng-etal-2018-pathologies] 在 input reduction 中通过逐步移除输入词来考察输入特征对模型预测的影响，说明直接删除是一种可行且常用的 input perturbation 操作。然而，该研究同时发现，删除后的输入可能对人类而言已经缺乏足够语义信息，而模型仍保持原有的高置信度预测。这表明，虽然 direct deletion 能够明确实现输入信息的移除，但其 downstream effect 不能被假定为行为中性的。

进一步地，Lewis et al. (2020) [lewis-etal-2020-bart]在 BART 中对多种 text-corruption strategies 进行了受控比较，包括 token masking、token deletion 和 text infilling。Token masking 通过 `[MASK]` 保留缺失位置，而 token deletion 则直接移除相应 token。研究结果表明，不同 corruption policies 可以产生不同的 downstream task performance，并且 deletion 在部分 generation tasks 中优于 simple masking。这一结果并不能直接决定 CPB 应采用哪一种 unavailable-content representation，因为 BART 研究的是 denoising pre-training 而非 learner simulation；但它说明 deletion 与 masking 不能被预设为行为上等价的表示方式。

因此，本研究将 unavailable-content representation 视为需要单独检验的 operationalisation choice，而不是一个无关紧要的实现细节。在本研究中，两种候选 representation policies 的核心区别总结于 Table 3.X。两者均使预先指定的 target semantics 不再可用于后续 processing，但它们对这一 unavailable state 的表层表示不同：hard deletion 直接移除目标句，而 explicit masking 则在移除原始语义的同时保留一个显式的 missingness cue。

| Policy        | Representation of unavailable target | What is controlled           | Additional signal                    |
| ------------- | ------------------------------------ | ---------------------------- | ------------------------------------ |
| Hard deletion | Target sentence removed              | Target semantics unavailable | None                                 |
| Explicit mask | Equal-character missingness marker   | Same target is unavailable   | Explicit cue that content is missing |

基于这一考虑，本研究比较了两种对相同 unavailable target information 的表示方式。Hard deletion 将目标教学句直接表示为空：

\[
g_{\mathrm{delete}}(s)=\varnothing,
\]

而 explicit masking 则移除原始语义，并以等字符长度的 missingness marker 代替：

\[
g_{\mathrm{mask}}(s)
=
\texttt{[CONTENT UNAVAILABLE: ...]}.
\]

两种实现因此具有不同的 informational implication：hard deletion 仅使目标教学内容不再进入后续 processing，而 explicit masking 在移除原始语义的同时，还向模型显式提供“此处存在缺失信息”的元线索。这里的 character-length matching 仅保证 Python character count 相同，并不意味着 token count等价。

为检验这种 representation choice 是否会影响 downstream processing，本研究在两篇冻结教材（L01–L02）上进行了独立 sensitivity experiment。实验包含三个存在 information unavailability 的 mechanism conditions：

1. Attention ON / WM OFF；
2. Attention OFF / WM ON；
3. Attention ON / WM ON。

其中Attention ON意味着Attention Filter机制被触发的概率为100%。Attention OFF / WM OFF 未纳入比较，因为该条件不存在被标记为 unavailable 的句子，因此两种 representation policies 不产生实际差异。

每个 mechanism condition 分别在 hard deletion 和 explicit masking 的2种representation policies下运行3次，每篇教材包含7道冻结 assessment questions，其中有6道independent questions和1个cross-round integrative question，由此形成252个answers. 在全部126组 paired-round checks 中，Attention trigger、Attention-unavailable sentence IDs等一系列CPB机制变量均保持 100% 一致。因此，两种 conditions 具有相同的 mechanism trajectory 和相同的 instructional-information selection。它们之间唯一有意改变的是 unavailable content 的表示方式。任何 downstream difference 因而主要用于检验 Knowledge Encoding 和 subsequent answering 对这一 representational choice 的敏感性，而不是重新检验 Attention 或 WM 的执行差异。主要比较量定义为：

\[
\Delta Score
=
Score_{\mathrm{mask}}
-
Score_{\mathrm{delete}}.
\]

为了判断 masking 是否能够被视为 deletion 的 practically interchangeable implementation，本研究预先设定 \(\pm0.5\) 分的 practical-equivalence margin，并基于 14 个冻结 question clusters 进行 bootstrap，以计算 95% interval。仅当：

\[
CI_{95\%}
\subseteq
[-0.5,+0.5]
\]

时，才认为 practical equivalence 得到支持。

敏感性分析显示，两种实现的大多数 matched outputs 保持一致，但 practical equivalence 未能在上述预设范围内建立。总体 mask-minus-deletion score difference 为：

\[
\Delta=-0.370,
\]

其 95% interval 为：

\[
[-1.005,0.106].
\]

尽管该区间跨越 0，因而没有证据支持稳定的 directional difference，但它并未完全落入预设的 \(\pm0.5\) practical-equivalence margin。与此同时，91.27% 的 paired question scores 完全一致，而少数不一致案例出现了较大的 downstream score shifts，并主要集中于包含 Attention manipulation 的条件。

因此，最终采用 hard deletion 并非因为 sensitivity experiment 证明其在心理学上比 masking 更接近真实 ADHD attention，而是基于 **construct correspondence、minimal intervention 和 sensitivity evidence** 的联合判断。Attention Filter 所要表达的状态是目标 instructional information 不再进入后续 processing；hard deletion 直接实现这一变化，而 explicit mask 在移除目标语义的同时额外引入 explicit missingness cue。因此，hard deletion 被冻结为正式 unavailable-content policy。

需要注意的是，这一选择并不意味着 hard deletion 已被证明是人类 ADHD attentional disruption 的真实心理机制。Direct deletion 同时减少了 target semantics 和 downstream instructional input length，因此它仍然是一种研究特定的 computational operationalisation。当前 sensitivity evidence 仅支持将其作为本研究中更直接、可追踪且较少引入额外 representational signals 的正式实现。

#### 3.4.2 Working-Memory Processing Capacity

##### 3.4.2.1 Theoretical Motivation and Functional Role

Working memory (WM) 是一种容量有限的认知系统，用于在当前任务执行过程中暂时维持并处理与任务相关的信息，而不仅仅是对信息进行被动的短时存储 [baddeley2012working]。这一功能对于学习尤其重要，因为学习者在接收新的教学信息时，通常需要暂时保持前文内容，同时对新输入进行理解、比较和整合。已有课堂研究也表明，working-memory ability 与需要同时保持和处理信息的学习活动表现密切相关 [gathercole2008working]。因此，从学习过程的角度看，一段教学信息即使已经被学习者注意到，也并不意味着它能够不受限制地继续进入后续知识形成过程。当前可用的 processing resources 仍然会对进一步的信息处理形成约束。

Working Memory 对 ADHD learner simulation 具有独立于 Attention 的理论意义。ADHD-related cognitive differences 并不仅表现为 susceptibility to distraction，已有 meta-analytic evidence 同样显示，与 typically developing peers 相比，ADHD 儿童和青少年在多个 working-memory domains 上存在可靠的 group-level performance differences [martinussen2005meta; kasper2012moderators]。进一步的实验研究表明，ADHD-related WM limitations 可能随着 cognitive load 增加而更明显。Kofler et al. (2010) 发现，当 storage/rehearsal demands 超过可用 capacity 时，attentive behaviour 会受到影响，而且这种 capacity exceedance 在 ADHD 儿童中出现在相对较低的 cognitive load 下 [kofler2010adhd]。这一结果支持在 CPB 中采用 **demand-sensitive capacity constraint**，而不是将 WM-related information loss 设置为与 instructional demand 无关的固定效应。

但这些研究并不意味着所有 ADHD individuals 都具有一个固定且字面意义上“更小”的记忆空间，而是支持 ADHD 与 working-memory performance limitations 之间存在稳定的群体层面关联。因此，通过 Attention Filter 表示 distraction-related information loss和post-Attention processing constraints是两种完全不同的机制。基于这一点，本研究将 Attention 和 WM 分别建模：前者描述教学信息是否在干扰后仍然可用，后者描述这些仍然可用的信息是否能够在有限 processing capacity 下继续被处理。

基于上述理论定位，CPB 将 WM 表示为位于 **Attention 与 Knowledge Encoding 之间的 processing-capacity constraint**。对于第 \(r\) 个 Teaching Round 和条件 \(c\)，Attention Filter 首先产生 post-Attention input \(P_{r,c}\)；Working-Memory stage 随后进一步限制其中能够继续进入 Knowledge Encoding 的信息，并形成 Available Input \(A_{r,c}\)：

\[
P_{r,c}
\xrightarrow{\mathrm{Working\ Memory}}
A_{r,c}.
\]

因此，在 CPB 中，**Attention 决定哪些 instructional information 在干扰后仍然 available，而 WM 决定这些 remaining information 在当前 processing constraint 下能否继续进入后续处理**。这里的 WM mechanism 并不试图估计真实学生的生理 working-memory capacity，也不直接生成 Explicit LTM 或改变最终 assessment answer；它只控制能够到达 shared Knowledge Encoder 的 instructional information。下一节将进一步说明这一 processing-capacity constraint 如何通过 instructional processing demand、condition-specific capacity threshold 以及相应的信息限制规则进行具体实现。

##### 3.4.2.2 Working-Memory Mechanism Implementation

![image-20260825191223465](/Users/willow/Library/Application Support/typora-user-images/image-20260825191223465.png)

Figure x：/Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter3/export/ch03_working_memory_mechanism_flow.png

如图x所示，Working-Memory stage 在 Attention Filter 之后运行，并以 Teaching Round 为基本处理单位。对于第 \(r\) 个 Teaching Round \(R_r\)，WM mechanism 同时使用两个输入：Attention 处理后仍然可用的 instructional information \(P_{r,c}\)，以及该 Teaching Round 预先计算并冻结的 Processing Demand Bits \(D(R_r)\)。PDB 是 Teaching Round 的 condition-invariant 属性，在所有 learner conditions 中保持相同，并且不会因为 Attention 已经使部分信息 unavailable 而重新计算。

在每个 Teaching Round 中，WM trigger 使用统一且确定性的 threshold rule：
$$
\operatorname{WMOverflow}(R_r,c)
=
\mathbf{1}
\left[
D(R_r)>C^{WM}_c
\right].
$$

也就是说，当 frozen round-level processing demand 严格高于当前 condition 的 WM capacity 时，WM constraint 被触发；当 demand 等于或低于 capacity 时，则不触发。与 Attention Filter 的 probability-based trigger 不同，WM 不进行随机采样。因此，在 Teaching Round、PDB 和 capacity threshold 保持相同的情况下，WM trigger decision 始终相同。当 WM overflow 被触发时，系统只在 Attention stage 后仍然可用的 instructional sentences 中进行进一步限制。\(P_{r,c}\) 为 post-Attention input；若其中至少仍有一条 instructional sentence 可用，则系统按照原始教学顺序选择最早的一条，并将其标记为 WM-unavailable，正式实验和Attention Filter一样统一采用 hard deletion：
$$
R^{WM}_{r,c}
=
\{\operatorname{First}(P_{r,c})\}.
$$

最终进入 Knowledge Encoder 的 Available Input 定义为：

$$
A_{r,c}
=
P_{r,c}
-
R^{WM}_{r,c}.
$$

每个 Teaching Round 最多执行一次 sentence-level removal，也不会再次删除已经被 Attention 标记为 unavailable 的句子。因此，这一规则更准确地描述为一个 **deterministic, within-round FIFO-style information-restriction rule**，而不是对真实人类 Working Memory 的直接模拟。

在实验中，每个 experimental condition \(c\) 对应一个预先设定的 WM capacity threshold \(C^{WM}_c\)。该 threshold 与 PDB 使用相同的数值尺度，但并不表示真实学生能够保存多少 sentences、tokens 或 working-memory slots，而是用于控制 WM constraint 强度的 study-specific parameter。较低的 capacity threshold 会使更多 Teaching Rounds 超过容量边界，因此对应更强的 WM constraint。各实验条件使用的冻结参数见 Table 3.X。

**Table 3.X. Registered Working-Memory capacity thresholds across experimental conditions**

| Condition | WM capacity \(C^{WM}_c\) (bits) | Calibration on 42 independent-question source rounds | Interpretation |
|---|---:|---:|---|
| WM OFF / CPB Zero | \(10^{10}\) | 0/42 above capacity | Effectively non-binding capacity; WM removal is disabled |
| WM ON — Study 1 | 321.9937895 | 21/42 above capacity | Median boundary used for binary WM mechanism validation |
| CPB Low | 362.0988065 | 14/42 above capacity | Relatively weak WM constraint; highest-demand one-third exceed capacity |
| CPB Medium | 321.9937895 | 21/42 above capacity | Intermediate WM constraint; approximately one-half exceed capacity |
| CPB High | 246.9297100 | 28/42 above capacity | Strong WM constraint; highest-demand two-thirds exceed capacity |

需要注意的是，`CPB Low`、`CPB Medium` 和 `CPB High` 表示的是 **constraint severity**，而不是 capacity 数值本身的高低。因此，随着 WM constraint 增强，registered capacity 相应降低：

\[
C^{WM}_{\mathrm{Low}}
>
C^{WM}_{\mathrm{Medium}}
>
C^{WM}_{\mathrm{High}}.
\]

![image-20260825190834883](/Users/willow/Library/Application Support/typora-user-images/image-20260825190834883.png)

Figure xx：/Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter3/export/Design_Figure_WM_capacity_threshold_calibration.png

如图 XX 所示，Low、Medium 和 High thresholds 基于 42 个 independent assessment questions 对应 source rounds 的冻结 PDB distribution 选取，并固定为 WM capacity boundaries，使分别有 14/42、21/42 和 28/42 个 source rounds 超过相应 threshold。该校准方式在同一组 assessment-relevant source rounds 上构建了递进增强的 WM constraint gradient，从而使后续实验能够在保持材料不变的前提下，受控比较不同 processing-capacity constraints 对学习表现的影响。

#### 3.4.3 Knowledge Encoding

##### 3.4.3.1 Theoretical Motivation and Functional Role

设计 Knowledge Encoding 环节的首要原因是，经过 Attention 和 Working-Memory processing 后仍然 available 的信息，不应被直接等同于已经形成的持久知识。经典的 levels-of-processing framework 指出，后续记忆保持不仅取决于信息是否曾经处于可访问状态，还取决于该信息在 encoding 过程中经历了何种 processing [craik1972levels]。实验研究进一步表明，不同的 encoding operations 可以产生不同的 subsequent retention，其中更具语义性和 elaboration 的 processing 通常对应更稳定的后续记忆表现 [craik1975depth]。因此，本研究区分 **information available for encoding** 与 **knowledge encoded into memory**：教学信息能够通过前序 Attention 和 WM constraints，并不意味着这些信息必然会以完整、等效或逐字复制的形式进入后续知识状态。 

与此同时，本研究不将 Knowledge Encoding 设置为第三个 ADHD-specific manipulated mechanism。现有 ADHD memory literature 并不支持一个能够与 Attention 和 Working Memory 清晰分离、并可统一应用于所有任务的单一 encoding deficit。部分研究确实观察到 ADHD-related encoding differences，但这些差异往往与 attentional allocation、working-memory demand、executive control 或 encoding strategy 等过程相互交织。例如，在特定实验任务中，ADHD 与 non-ADHD 儿童在 encoding-only condition 下可以表现出相近的 accuracy，而组间差异在增加 working-memory demands 后才明显出现 [kofler2020working]；其他研究则将部分 encoding differences 与 relevant-information prioritisation 和 attentional allocation 联系起来 [ortega2020neurocognitive]，并指出 verbal-memory performance 还可能受到 working-memory、executive-control 以及 mnemonic-strategy use 的影响 [Lundervold2019VerbalMF; laine2025role]。因此，本研究并不假设真实 ADHD 与 NT learners 具有完全相同的 encoding ability，而是将 **shared Encoding** 作为一项受控的 modelling assumption：Attention 和 Working Memory 被选为主要 manipulated mechanisms，而 downstream Encoder 在所有 simulated learners 中保持一致，以避免将已经通过上游机制表示的差异再次编码进 condition-specific Encoder，从而降低机制归因的清晰度。 

在计算架构层面，将当前输入与后续可调用的显式 memory state 分离同样具有已有先例。Generative Agents 将 agent 的经历写入独立的 natural-language memory stream，并通过 retrieval 和 reflection 使这些记忆参与后续行为生成 [park2023generative]；CoALA 将 modular memory components 作为 language-agent architecture 的组成部分，并明确区分当前 observations、internal memory states 以及对 memory 的操作 [sumers2023cognitive]。类似地，Retrieval-Augmented Generation (RAG) 区分语言模型内部的 parametric memory 与外部可访问的 non-parametric memory [lewis2020retrieval]。虽然这些工作并不意味着 LLM-agent memory 等同于人类长期记忆，也不直接验证人类的 knowledge-encoding process，但它们提供的是架构层面的依据，即：**当前经历、当前输入与后续可访问的 knowledge state 可以被显式分离，而不必全部保留在持续增长的 prompt context 中**。 

基于上述认知和计算架构依据，CPB 将 Knowledge Encoding 定义为 Attention 和 Working Memory 之后的 shared downstream transformation。对于条件 \(c\) 下的第 \(r\) 个 Teaching Round，Available Input \(A_{r,c}\) 表示经过前序 cognitive constraints 后实际能够到达 Encoder 的教学信息，而 \(L_{r,c}\) 表示这些信息经过相同 Knowledge Encoder 后形成的 explicit knowledge state：

 \[ A_{r,c} \xrightarrow{\mathrm{Encoding}} L_{r,c} \]

这一设计使 CPB 能够明确区分 **what information reaches encoding** 与 **what knowledge is subsequently represented in memory**。由于 \(A_{r,c}\) 与 \(L_{r,c}\) 并不被假定为完全等价，所以即使没有发生 Attention- 或 WM-related information loss，也不能将最终知识状态解释为 perfect retention。因此，Attention OFF / WM OFF condition 被定义为 **encoding-only reference**，而不是 perfect-memory condition。各 Teaching Rounds 生成的 \(L_{r,c}\) 随后被累积为 externally inspectable Explicit Knowledge State，并在 Assessment Phase 中作为 memory-constrained answering 的知识来源。

##### 3.4.3.2 Shared Knowledge-Encoding Mechanism

在 CPB方法中，Knowledge Encoding 以每个 Teaching Round 为基本处理单位，并在 Attention 和 Working-Memory processing 完成之后执行。对于条件 \(c\) 下的第 \(r\) 个 Teaching Round，Encoder 的输入仅为前序机制处理后形成的 Available Input \(A_{r,c}\)，而不是原始 instructional source 或完整 Teaching Round。任何已经被 Attention 或 WM 标记为 unavailable 的信息均不会再次提供给 Encoder。该过程可以表示为：

\[
L_{r,c}
=
\operatorname{Encode}(A_{r,c}),
\]

其中 \(L_{r,c}\) 表示该 Teaching Round 经 Encoding 后形成的 round-level Explicit LTM entry。由此，前序机制负责决定 **what information reaches Encoding**，而 Knowledge Encoder 仅对实际到达该阶段的信息进行后续表征转换。

为使这一转换在不同 simulated learners 和 experimental conditions 中保持一致，本研究使用固定的 shared Knowledge-Encoding procedure。所有条件采用相同的 Encoder model、encoding prompt、input structure 和 generation configuration；Attention、WM constraint level 或其他 learner-condition metadata 均不会改变 Encoding instruction。Figure 3.X 展示了正式实验中使用的冻结 Knowledge-Encoding prompt。该 prompt 要求模型仅根据实际收到的 classroom information 生成一个简短的 long-term memory entry，以自己的语言保留主要概念及其关系，同时明确禁止使用 outside knowledge 或补全输入中未提供的信息。输出被限制为单段 plain text，以减少额外格式差异对后续 Explicit LTM representation 的影响。

![image-20260825214606219](/Users/willow/Library/Application Support/typora-user-images/image-20260825214606219.png)

> *Figure 3.X. Frozen prompt template used by the shared Knowledge Encoder.*
>
> /Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter3/export/ch03_knowledge_encoding_prompt_example.pdf

Knowledge Encoding 的目标并不是逐字复制 Available Input，而是将其转换为一个较为简洁的 semantic knowledge representation。因此，\(A_{r,c}\) 与 \(L_{r,c}\) 在概念上并不被假定为完全相同。Encoder 可以对输入内容进行 paraphrasing、compression 和 information reorganisation，但生成的 memory entry 应受到 \(A_{r,c}\) 所提供信息的约束，而不应恢复此前已经变得 unavailable 的教学内容。Figure 3.Y 给出了一个实际的 Encoding example：左侧为进入 Encoder 的 Available Instructional Input \(A_{r,c}\)，右侧为由相同内容生成的 Encoded LTM Entry \(L_{r,c}\)。该示例表明，主要概念及其关系可以在 Encoding 后得到保留，但其表述形式和信息压缩程度可以与输入文本不同。

>  ![image-20260825214805303](/Users/willow/Library/Application Support/typora-user-images/image-20260825214805303.png)
> *Figure 3.Y. Example transformation from Available Instructional Input to an encoded LTM entry.*
>
> /Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter3/export/ch03_knowledge_encoding_prompt_example.pdf

每个 Teaching Round 独立执行上述 Encoding procedure，并最多生成一个对应的 \(L_{r,c}\)。当经过 Attention 和 WM processing 后已经不存在可用于 Encoding 的 instructional information，即 \(A_{r,c}=\varnothing\) 时，该轮不根据 distractor content、prompt context 或模型的 pretrained knowledge 自行生成新的 instructional memory。该规则保证 Explicit LTM 仅来源于经过前序 cognitive-processing stages 后实际仍然 available 的教学信息，并保持从 Available Input 到 encoded knowledge state 的可追踪关系。

Knowledge Encoder 在所有 experimental conditions 中保持共享，是本研究的一项受控 modelling decision，而不是关于真实 ADHD 与 NT learners 具有完全相同 encoding ability 的经验性假设。通过固定 \(A_{r,c}\rightarrow L_{r,c}\) 的 Encoding procedure，条件之间的主要差异首先由 Attention 和 Working-Memory mechanisms 决定，即由哪些信息最终能够到达 Encoding 决定，而不会进一步加入 condition-specific Encoder behaviour。与此同时，由于 Encoding 本身仍是一个 semantic transformation，Attention OFF / WM OFF condition 即使不存在前序 information loss，也不能被解释为 perfect-memory condition，而仅作为 **encoding-only reference**。各 Teaching Rounds 生成的 \(L_{r,c}\) 随后被累积并冻结为 simulated learner 的 Explicit Knowledge State，并在 Assessment Phase 中作为 memory-constrained answering 的知识来源。

##### 3.4.3.3 Pretrained-Knowledge and Memory-Constrained Answering

在正式实验中，CPB 的 Assessment Phase 要求 simulated learner 仅依据教学阶段形成的 Explicit LTM 回答问题。然而，大语言模型本身已经具有预训练知识，因此存在两个需要首先排除的替代解释。第一，student model 可能在完全没有接触课程材料的情况下，就已经能够凭借 pretrained knowledge 回答大部分 assessment questions，从而压缩后续学习操纵的可观察空间。第二，即使向模型提供 Explicit LTM 并通过 prompt 要求其仅依据记忆作答，模型仍可能绕过该限制，利用自身已有的金融知识补全答案。为检验这两个前提，本研究分别进行了 **Question-Only Baseline** 和 **Biology-Memory-Only Control**。

在 Question-Only Baseline 中，DeepSeek V4-Flash 不接收任何课程材料、教学历史或 Explicit LTM，而是直接回答正式 assessment set 中的 49 道金融问题。生成的回答随后使用与正式实验相同的 Qwen3.7-Max Judge 进行评分。该条件的平均得分为：

\[
\bar S_{\mathrm{Baseline}}=7.823.
\]

这一结果表明，DeepSeek V4-Flash 本身已经具有一定的金融领域 pretrained knowledge，因此正式实验不能假设 assessment performance 完全来源于教学阶段。同时，baseline performance 距离满分10分仍有一定上升空间，说明该 question set 仍保留了可观察的 learning headroom。

![image-20260825221657687](/Users/willow/Library/Application Support/typora-user-images/image-20260825221657687.png)

Figure 3.cc Memory Restriction Prompt

/Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter3/export/ch03_memory_restriction_prompt_example.png

为了进一步检验 Assessment Phase 中的 **Memory Restriction（Figure 3.cc)** 是否能够实际约束模型的信息来源，本研究构造了一个与金融课程内容完全无关的 Biology Explicit LTM，并用其替换正式金融课程学习后形成的 Explicit LTM。该 biology memory 包含 14 条 memory entries，共 702 词，内容覆盖细胞、遗传、生理、进化与生态等主题，不包含金融、会计、市场或投资相关知识。随后，DeepSeek V4-Flash 在与正式实验相同的 memory-constrained answering prompt 下回答原有的 49 道金融 assessment questions。

其中，answering prompt 明确要求模型只能依据提供的 learned memory 回答，不得使用未包含在 memory 中的信息。所有回答继续由相同的 Qwen3.7-Max Judge 按冻结的 137 个 atomic criteria 进行评分。

Biology-Memory-Only condition 的结果如Table 3.XXX所示：

Table 3. 

| Condition | Mean Score |
|---|---:|
| Question-Only Baseline | 7.823 |
| Biology Memory Only | 0.000 |
| Difference | -7.823 |

在 Biology Memory Only 条件下，49/49 道 assessment questions 的最终得分均为 0；全部 137/137 个 rubric criteria 均被 Judge 判定为 `Absent`，其中 `Correct = 0`、`Contradicted = 0`，并且七篇教材对应问题的平均得分均为 0。由此形成了一个清晰的对照：在没有 memory restriction 时，模型能够利用 pretrained knowledge 获得较高的金融问题得分；而当提供的 Explicit LTM 中不包含任何相关金融知识，并要求模型仅依据该 memory 作答时，其金融问题得分降至 0。

这一结果支持 **memory-access restriction 在当前 student-model setting 下具有操作性有效性**。更准确地说，当所提供的 Explicit LTM 缺乏回答 assessment question 所需要的信息时，DeepSeek V4-Flash 在当前 answering prompt 下没有表现出利用 pretrained financial knowledge 补全正确答案的行为。因此，该 control 验证了模型对“仅依据所提供 memory 回答”这一约束的遵守效果符合预期。

基于上述两个 control，后续正式实验中的 assessment procedure 将冻结的 Explicit Knowledge State 作为 simulated learner 的唯一实验性知识来源。对于条件 \(c\)，各 Teaching Rounds 形成的 round-level LTM entries 被累积并冻结为：

\[
\mathcal{L}_c=
\{L_{1,c},L_{2,c},\ldots,L_{R,c}\}.
\]

每一道 assessment question \(Q_q\) 均从相同的 frozen Explicit Knowledge State 独立生成回答：

\[
\mathcal{L}_c + Q_q
\rightarrow
Y_{q,c},
\]

原始 instructional source、完整 teaching history 以及此前被 Attention 或 Working Memory 标记为 unavailable 的信息均不再提供给 answering model。由于 Knowledge Encoding 和 question answering 分别代表同一 simulated learner 的学习形成阶段与知识使用阶段，且相应的 encoding 和 memory-restriction prompts 在 DeepSeek V4-Flash 上表现稳定，后续正式实验在这两个阶段统一使用 DeepSeek V4-Flash，以避免额外引入 cross-model differences。

综合而言，Question-Only Baseline 表明 assessment set 并未被 student model 在无教学条件下完全掌握，因此仍存在可观察的学习空间；Biology-Memory-Only Control 则表明，在当前 prompt 和 model configuration 下，answer generation 能够被所提供的 Explicit LTM 有效约束。两个 control 共同增强了后续 performance differences 的可归因性，使其更有理由被解释为不同 learning-process manipulations 及其所形成 Explicit Knowledge State 的结果，而不是模型在 Assessment Phase 中不受限制地调用 pretrained financial knowledge。


### 3.5 Research Design and Evaluation Strategy

#### 3.5.1 Research Questions and Study Mapping

The overall research question guiding this study is:

**Main RQ:**  
Can CPB provide a theory-consistent and traceable representation of ADHD-related learning processes, and how do its behavioural consistency and representational robustness compare with persona prompting?

This overarching question is addressed through three research questions with distinct evidential roles:

**RQ1 — Mechanism:**  
Does the CPB processing pipeline produce intended and traceable transitions from instructional information, through attention, working-memory processing and encoding, to the downstream knowledge state?

**RQ2 — Representation:**  
Compared with persona prompting, does CPB produce learning behaviour that shows more theoretically consistent sensitivity to controlled distraction and processing demand?

**RQ3 — Multidimensional Robustness:**  
When additional functionally heterogeneous learner-profile prompts are introduced, does a factorised CPB representation show smaller baseline-relative changes in learning performance and run-to-run variability than joint persona prompting?

**Table 3.X. Mapping of research questions to experimental studies and evidence**

| RQ      | Evidential Role                       | Study and Core Comparison                                    | Primary Evidence                                             |
| ------- | ------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **RQ1** | Mechanistic validity                  | **Study 1:** \(2 \times 2\) Attention OFF/ON × WM OFF/ON ablation, with a shared Encoding stage and A0W0 as an encoding-only reference | Correct mechanism execution and traceable information-state changes |
| **RQ2** | Comparative representational validity | **Study 2:** Prompt-NT, Prompt-ADHD, CPB Zero, Low, Medium and High under matched distraction and instructional processing-demand conditions | Systematic sensitivity to distraction and processing demand  |
| **RQ3** | Representational robustness           | **Study 3:** Matched aligned and conflicting multidimensional learner profiles under joint persona prompting and factorised CPB representation | Baseline-relative displacement in Mean Checklist Score and run-to-run variability |

The three research questions are examined through a progressive experimental design. Study 1 first evaluates whether the internal CPB mechanisms operate as intended and produce traceable information-state transitions. Study 2 then compares CPB with persona prompting under controlled distraction and instructional processing demand. Finally, Study 3 introduces additional heterogeneous learner characteristics to examine the robustness of joint and factorised representations. Table 3.X summarises the mapping between research questions, evidential roles, experimental studies, and the primary forms of evidence used to address each question.

#### 3.5.2 Study 1 — Mechanistic Validity of CPB

##### 3.5.2.1 Research Question and Subquestions

Study 1 对应 RQ1，旨在检验 CPB 的内部 processing pipeline 是否能够按照预定义的机制产生正确、可归因且可追踪的信息状态变化。RQ1 为：

> **RQ1 — Mechanism:** Does the CPB processing pipeline produce intended and traceable transitions from instructional information, through attention, working-memory processing and encoding, to the downstream knowledge state?

由于 RQ1 同时涉及机制执行、阶段性信息变化以及这些变化向下游知识状态的传播，仅观察最终 assessment performance 无法充分回答这一问题。因此，本研究将 RQ1 进一步拆分为三个相互衔接的 Subquestions (SQs)。三个 SQ 构成由底层机制执行到端到端结果传播的递进验证结构，如 Table 3.X 所示。

**Table 3.X. Subquestions and validation focus for Study 1**

| Subquestion | Validation Focus                             | Evidence Sought                                              |
| ----------- | -------------------------------------------- | ------------------------------------------------------------ |
| **SQ1**     | Mechanism execution                          | Correct triggering and execution of the registered Attention and WM rules |
| **SQ2**     | Stage-specific information-state transitions | Traceable changes at the stage where each mechanism is intended to operate |
| **SQ3**     | Cumulative and downstream propagation        | Evidence that upstream information changes propagate to the resulting Explicit LTM and downstream question performance |

**SQ1 — Mechanism execution:**  

> **Do the Attention and Working-Memory mechanisms execute their registered rules correctly?**

SQ1 首先检验 CPB 中两个被操纵的 ADHD-related mechanisms 是否按照预先注册的规则实际运行。对于 Attention Filter，需要确认 eligible distractor 是否按照 condition-specific trigger setting 正确触发，并且触发后只使预先映射的 target information 变得 unavailable，而不影响 non-target instructional information。对于 Working-Memory mechanism，则需要确认 frozen round-level processing demand 是否按照注册的 capacity threshold 正确触发 WM overflow，并在触发后按照预定义的 within-round FIFO-style rule 对 Attention 后仍然可用的信息进行限制。该层验证关注的是 **mechanism implementation fidelity**：在讨论任何学习结果之前，首先确认观察到的信息变化确实来自预定义机制，而不是程序执行错误或非预期的信息选择。

**SQ2 — Stage-specific information-state transitions:**  
> **Do the individual processing stages produce the intended and attributable changes in information availability and encoding?**

在确认机制正确执行后，SQ2 进一步检验这些机制是否在其理论对应的位置产生预期的信息状态变化。CPB 的 Teaching Phase 可以表示为：

\[
S_r
\xrightarrow{\text{Attention Filter}}
P_{r,c}
\xrightarrow{\text{Working-Memory Processing}}
A_{r,c}
\xrightarrow{\text{Shared Knowledge Encoder}}
L_{r,c}.
\]

其中，Attention 应首先作用于 \(S_r \rightarrow P_{r,c}\)，改变受控 distraction 后仍然可用于后续 processing 的 instructional information；WM 则在此基础上作用于 \(P_{r,c} \rightarrow A_{r,c}\)，进一步限制在 registered processing-capacity constraint 下能够到达 Encoder 的信息。最后，所有条件共享相同的 Knowledge Encoder，将 \(A_{r,c}\) 转换为 round-level Explicit LTM entry \(L_{r,c}\)。因此，SQ2 的重点是检验每一阶段的变化是否能够被单独观察并归因于其对应机制，而不是仅根据最终 LTM 或 assessment score 反推中间发生了什么。

**SQ3 — Cumulative and downstream propagation:**  
> **Do stage-specific information changes propagate through the full CPB pipeline to the final Explicit LTM and assessment performance?**

SQ3 最后检验前述局部信息变化是否能够沿完整 processing chain 向下游传播。在 aggregate level，单独启用 Attention 或 WM 应降低最终到达 Encoder 的 Source information，而同时启用两个机制的 A1W1 应表现出两类局部限制的累计结果。相较于 encoding-only reference A0W0，受到更强 upstream restriction 的 conditions 预期具有较低的 SWAR，并进一步表现为较低的 Source-to-LTM semantic correspondence（E2ESR）。如果这些变化继续传播至 Assessment Phase，则 Checklist Score 也应在 aggregate level 呈现相应下降。该预期不要求每道 individual question 严格单调，因为问题可能依赖不同 source rounds，且部分答案可以从剩余 LTM information 中获得 partial credit。

由此，Study 1 形成三个递进的验证层级：

\[
\text{Mechanism Execution}
\rightarrow
\text{Stage-Specific Information-State Transitions}
\rightarrow
\text{Cumulative and Downstream Propagation}.
\]

Figure 3.X 将三个 Study 1 subquestions 映射到 CPB information-flow chain 中各自对应的验证位置。SQ1 对应 Attention Filter 和 Working-Memory Processing 的 mechanism execution；SQ2 对应 Attention、Working Memory 和 Encoding 所产生的 stage-specific information-state transitions；SQ3 对应上游信息变化向 Explicit LTM 和 final answer 的 cumulative downstream propagation。该图仅用于说明各 SQ 的 validation scope，不展示具体 evaluation measures；相关指标将在 Section 3.5.2.3 中定义。

![Study 1 validation logic](/Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter3/export/ch03_study1_validation_logic.png)

> *Figure 3.X. Study 1 validation structure across CPB mechanism execution, stage-specific information-state transitions, and cumulative downstream propagation.*

这一结构使 RQ1 不依赖单一的最终 performance measure，而能够分别检验机制是否正确运行、信息是否在预期阶段发生变化，以及这些局部变化是否最终传播到 Explicit LTM 和可观察的回答表现。下一节在此基础上介绍用于隔离 Attention 和 WM effects 的 \(2\times2\) experimental design and conditions。

##### 3.5.2.2 Experimental Design and Conditions

为回答 SQ1–SQ3，Study 1 采用一个 \(2\times2\) factorial ablation design，分别操纵 Attention Filter 和 Working-Memory Processing Capacity 的 OFF / ON 状态：

\[
\text{Attention OFF/ON}
\times
\text{WM OFF/ON}.
\]

该设计产生四个实验条件，如 Table 3.X 所示。其目的不是构造不同程度的 ADHD severity，而是通过明确的机制边界条件最大化 **mechanism identifiability**：A1W0 和 A0W1 分别隔离 Attention 与 WM 的独立作用，A1W1 检验两个机制按照 CPB processing order 连续启用时的累计作用，而 A0W0 则提供不包含 Attention- 或 WM-related information restriction 的 reference condition。

**Table 3.X. Study 1 experimental conditions**

| Condition | Attention | Working Memory | Functional Role                                              |
| --------- | --------- | -------------- | ------------------------------------------------------------ |
| **A0W0**  | OFF       | OFF            | Encoding-only reference                                      |
| **A1W0**  | ON        | OFF            | Isolates the Attention constraint                            |
| **A0W1**  | OFF       | ON             | Isolates the WM constraint                                   |
| **A1W1**  | ON        | ON             | Tests the sequential combination of Attention and WM constraints |

Study 1 使用确定性的边界参数实现上述 OFF / ON 操纵。Attention OFF 对应 \(p_A=0\)，因此 distractor event 不会触发 Attention-attributed target removal；Attention ON 对应 \(p_A=1\)，因此所有包含 eligible distractor assignment 的 Teaching Rounds 均按照冻结的 distractor-to-target mapping 触发 Attention Filter。相应地，Attention manipulation 只改变哪些教学信息能够形成 Post-Attention Input \(P_{r,c}\)，而不改变后续机制的执行规则。

Working Memory 的 OFF / ON 状态通过 condition-specific capacity threshold 实现。WM OFF 使用一个高于全部冻结 PDB 范围的 non-binding capacity：

\[
C^{WM}_{\mathrm{OFF}}=10^{10}\text{ bits},
\]

因此任何 Teaching Round 都不会触发 WM overflow。WM ON 则使用冻结 threshold：

\[
C^{WM}_{\mathrm{ON}}=321.9937895\text{ bits}.
\]

该值位于 42 个 independent assessment questions 对应 source-round PDB distribution 的中位边界，使其中 21/42 个 source rounds 位于 capacity 以上，另外 21/42 个位于或低于 capacity。因此，WM ON 并不意味着每个 Teaching Round 都发生 information removal，而是启用如下确定性的 capacity rule：

\[
D(R_r)>C^{WM}_{\mathrm{ON}}
\quad\Rightarrow\quad
\text{WM constraint triggered}.
\]

当该条件成立时，WM 按 Section 3.4.2 所定义的规则，从 Attention 后仍然可用的 instructional information 中进一步限制信息；未超过 threshold 的 Teaching Rounds 则不会产生 WM-attributed information loss。由此，Attention ON 表示 **eligible distractor 必然触发 Attention mechanism**，而 WM ON 表示 **processing-capacity constraint 被启用，但只有 demand 超过 threshold 的 Teaching Rounds 才实际触发 WM restriction**。

在 A1W1 条件下，两个机制严格按照 CPB 的既定 processing order 顺序执行：

\[
S_r
\xrightarrow{\text{Attention Filter}}
P_{r,c}
\xrightarrow{\text{Working-Memory Processing}}
A_{r,c}.
\]

Attention 首先决定哪些 instructional sentences 在 distraction 后仍然 available，随后 WM 只能从这些 remaining information 中进行进一步限制。WM trigger 仍依据该 Teaching Round 预先冻结的 \(D(R_r)\) 判断，PDB 不会因为前序 Attention removal 而重新计算。因此，A1W1 检验的是两个已注册机制在固定顺序下的累计信息限制，而不是一个新的 joint mechanism。

除 Attention 和 WM 状态外，四个条件的其余实验组成均保持一致。所有 conditions 使用相同的 frozen Teaching Rounds、distractor assignments、assessment questions、scoring rubrics、student-model configuration 和 Judge procedure，并共享完全相同的 Knowledge Encoder。特别地，A0W0 虽然关闭 Attention 和 WM constraints，但仍然经过正常的 Knowledge Encoding，因此被定义为 **encoding-only reference**，而不是 perfect-memory condition。

通过这一 \(2\times2\) design，Study 1 可以在保持材料、Encoding 和 Assessment procedure 不变的情况下，分别观察 Attention、WM 以及二者顺序联合作用所产生的信息状态差异。

Study 1 使用七篇冻结教学材料，共包含 83 个 Teaching Rounds 和 201 个 instructional sentences；L01–L07 分别包含 14、12、11、11、12、10 和 13 个 Teaching Rounds。Assessment set 在每个 condition 中保持完全一致，包括 42 道 independent questions（每篇教材 6 道）和 7 道 cross-round integrative questions（每篇教材 1 道），共 49 道问题。

四个 \(2\times2\) conditions 各执行一次 canonical simulated-learner run。每个 condition 依次处理全部 83 个 Teaching Rounds，并为每个 round 保存一条 memory-state record，因而共形成 332 条 condition-round memory records。其中 323 条包含实际编码的 Explicit LTM content，另外 9 条因该轮没有剩余可用教学信息而被标记为 `no_visible_information`，不包含可用于回答的 LTM 内容。每个 condition 随后独立回答全部 49 道问题，共生成 196 份 student answers、196 条 question-level Judge records 和 548 条 criterion-level judgements。

这些数量也界定了各指标的分析单位。ATRF 和 NTPR 以 sentence-level Attention decisions 为基础，WMTA 以全部 Teaching Rounds 为基础，FRF 以 eligible WM-overflow rounds 为基础；AAR、WMAR、SWAR、ESR 和 E2ESR 首先依据 round-level processing records 计算，再聚合为七个 lesson-level observations；Checklist Score 首先在 question level 计算，再聚合至 lesson 和 condition。报告的 95% confidence intervals 使用 lesson 作为 bootstrap unit，因此反映七篇冻结教材之间的稳健性，而不是重复 student runs 之间的随机波动。

##### 3.5.2.3 Evaluation Measures

为回答 SQ1–SQ3，Study 1 采用三层相互衔接的 evaluation measures。第一层对应 SQ1，检查 Attention 和 Working Memory 是否按照预先注册的规则正确触发和执行；第二层对应 SQ2，测量信息在 \(S_r \rightarrow P_{r,c} \rightarrow A_{r,c} \rightarrow L_{r,c}\) 各局部阶段中的状态变化；第三层对应 SQ3，进一步检验这些局部变化是否累计传播至最终 Explicit LTM 和 assessment performance。下文按照这一验证顺序依次定义各层 measures，从而避免仅依赖最终 question score 反推内部机制是否有效。

除特别说明外，基于文本数量的 availability measures 均使用确定性的 \(\operatorname{WordCount}(X)\) 计算，其中仅统计 instructional content，不包括 distractor labels、control markers 或其他实验性提示文本。该计数用于描述不同 processing stages 前后仍然可用的教学信息量，而不被解释为真实人类的 attention level、working-memory capacity 或 knowledge-retention percentage。

---

**SQ1 — Mechanism execution**

SQ1 首先检查两个 manipulated mechanisms 是否按照 Section 3.4 中注册的规则实际运行。在 Study 1 中，Attention ON 对应 \(p_A=1\)，因此所有包含 eligible distractor assignment 的 Teaching Rounds 都应触发 Attention Filter，并使其预先映射的 target sentence unavailable；Attention OFF 对应 \(p_A=0\)，因此不应产生任何 Attention-attributed removal。Working Memory 则采用确定性的 capacity rule：当

\[
D(R_r)>C^{WM}_c
\]

时触发 WM overflow，并从 Attention 后仍然 available 的 instructional sentences 中移除最早的一句；当 demand 未超过 capacity 时，不应发生 WM-attributed removal。因此，SQ1 的指标首先回答两个问题：**该触发的时候是否正确触发，以及触发以后是否执行了正确的信息选择规则。**

Attention execution 通过两个互补指标检查。**Attention Target-Removal Fidelity (ATRF)** 衡量按照冻结配置应被 Attention 移除的 target sentences 中，有多少实际上被正确移除：

\[
ATRF_c=
\frac{
\sum_r
\left|
T^{expected}_{r,c}
\cap
T^{removed}_{r,c}
\right|
}{
\sum_r
\left|
T^{expected}_{r,c}
\right|
}.
\]

其中，\(T^{expected}_{r,c}\) 表示条件 \(c\) 下根据 distractor mapping 和 trigger setting 应被移除的 sentence IDs，\(T^{removed}_{r,c}\) 表示 execution log 中实际被 Attention 移除的 IDs。ATRF 越接近 1，表示预定 target removal 的执行越完整；\(ATRF=1\) 表示所有应被 Attention 移除的目标信息均被正确处理。由于 Attention OFF 条件不存在 expected target removal，ATRF 主要用于存在预期 removal 的 Attention-ON rounds。

与之配套的 **Non-Target Preservation Rate (NTPR)** 检查不应该因 Attention 而被移除的信息是否被正确保留。若 \(N^{expected}_{r,c}\) 表示在 Attention stage 后应保持 available 的 instructional sentences，\(N^{preserved}_{r,c}\) 表示实际被保留的 sentences，则：

\[
NTPR_c=
\frac{
\sum_r
\left|
N^{expected}_{r,c}
\cap
N^{preserved}_{r,c}
\right|
}{
\sum_r
\left|
N^{expected}_{r,c}
\right|
}.
\]

NTPR 越接近 1，表示 unintended Attention removal 越少；\(NTPR=1\) 表示所有不应被 Attention 移除的信息均得到正确保留。因此，ATRF 与 NTPR 分别检查 **correct removal** 和 **correct preservation**，避免仅确认“删掉了目标句”而忽略非目标信息是否被误删。

Working-Memory execution 同样使用两个互补指标。**Working-Memory Trigger Agreement (WMTA)** 衡量日志中的实际 WM trigger 是否与注册的 capacity rule 完全一致：

\[
WMTA_c
=
\frac{1}{R}
\sum_r
\mathbf 1
\left[
z^{WM}_{r,c}
=
\mathbf 1
\left[
D(R_r)>C^{WM}_c
\right]
\right],
\]

其中 \(z^{WM}_{r,c}\) 表示实际记录的 WM trigger status。WMTA 越接近 1，表示实际触发结果与注册 threshold rule 的一致性越高；\(WMTA=1\) 表示所有 Teaching Rounds 均在应该触发时触发，并在不应触发时保持关闭。

在 WM 已触发且 post-Attention input 中仍存在可移除 instructional information 的轮次中，进一步计算 **FIFO Rule Fidelity (FRF)**。设 \(\mathcal E_c\) 为这些 eligible rounds，则：

\[
FRF_c=
\frac{1}{|\mathcal E_c|}
\sum_{r\in\mathcal E_c}
\mathbf 1
\left[
R^{WM}_{r,c}
=
\{\operatorname{First}(P_{r,c})\}
\right].
\]

FRF 越接近 1，表示 WM overflow 后越一致地执行了预定义的 within-round FIFO-style information-restriction rule；\(FRF=1\) 表示所有 eligible overflow rounds 均正确移除了 Attention 后最早仍可用的 instructional sentence。ATRF、NTPR、WMTA 和 FRF 均为本研究根据冻结机制规则与 execution logs 定义的 implementation-fidelity measures，其作用是验证程序是否按照注册设计运行，而不是衡量真实 ADHD cognitive fidelity。

---

**SQ2 — Stage-specific information-state transitions**

在确认机制执行正确后，SQ2 检验各 processing stages 是否在其对应位置产生了可追踪的信息状态变化。具体对应：

\[
S_r
\xrightarrow{\text{Attention}}
P_{r,c}
\xrightarrow{\text{WM}}
A_{r,c}
\xrightarrow{\text{Encoding}}
L_{r,c}.
\]

Attention stage 使用 **Attention-stage Availability Ratio (AAR)** 衡量原始 instructional information 经过 Attention Filter 后仍然 available 的比例。对于 lesson \(l\) 和 condition \(c\)：

\[
AAR_{l,c}
=
\frac{
\sum_{r\in l}\operatorname{WordCount}(P_{r,c})
}{
\sum_{r\in l}\operatorname{WordCount}(S_r)
}.
\]

AAR 回答的是：**原始 Source 中有多少 instructional information 在 Attention stage 后仍然能够继续进入 Working-Memory Processing？** \(AAR=1\) 表示该 lesson 没有发生 Attention-attributed instructional-information loss；AAR 越低，则表示越多 source information 在 Attention stage 后变得 unavailable。需要强调的是，AAR 不是“attention percentage”，而是根据显式 processing trace 计算的信息可用性比例。

Working-Memory stage 使用 **Working-Memory-stage Availability Ratio (WMAR)** 衡量已经通过 Attention 的信息中，有多少进一步通过 WM constraint 并到达 Knowledge Encoder：

\[
WMAR_{l,c}
=
\frac{
\sum_{r\in l}\operatorname{WordCount}(A_{r,c})
}{
\sum_{r\in l}\operatorname{WordCount}(P_{r,c})
}.
\]

WMAR 的分母使用 \(P_{r,c}\) 而不是原始 Source，这使其能够将 WM-attributed information restriction 与此前已经发生的 Attention loss 分离。\(WMAR=1\) 表示 WM stage 没有进一步减少 post-Attention information；WMAR 越低，则表示在已经通过 Attention 的信息中，有越大比例受到 WM capacity constraint 的进一步限制。因此，AAR 和 WMAR 分别定位 Attention 与 WM 对 information availability 的局部影响。

Knowledge Encoding 与前两个阶段不同，它在所有 conditions 中保持共享，因此该阶段关注的不是额外的 ADHD manipulation，而是 Available Input 与生成的 Explicit LTM 之间的 semantic correspondence。本研究使用 **Encoding Semantic Recall (ESR)** 作为 shared-Encoder diagnostic：

\[
ESR_{l,c}
=
\frac{1}{|\mathcal R^+_{l,c}|}
\sum_{r\in\mathcal R^+_{l,c}}
B_R(A_{r,c},L_{r,c}),
\]

其中：

\[
\mathcal R^+_{l,c}
=
\left\{
r\in l:
\operatorname{WordCount}(A_{r,c})>0
\right\},
\]

\(B_R(A_{r,c},L_{r,c})\) 表示以 Available Input 为 reference、Explicit LTM 为 candidate 计算的 BERTScore Recall。BERTScore 使用预训练语言模型的 contextual embeddings 对 candidate 与 reference token 进行语义匹配，因此相比依赖 exact lexical overlap 的指标，更能够识别 paraphrasing 和语义近似表达 [zhang2019bertscore]。本研究冻结使用 `microsoft/deberta-xlarge-mnli`，采用 Recall、`idf=False` 和 `rescale_with_baseline=True` 的配置。

选择 Recall 而不是单纯的 lexical similarity 或整体 F1，主要是因为 CPB Encoder 被明确要求将 Available Input 压缩和改写为简短的 LTM entry。本研究在此关注的问题是：**实际到达 Encoder 的语义内容有多少能够在生成的 LTM 中找到对应表征**，而不是要求 LTM 与输入保持逐字或等长一致。ESR 越高、通常越接近 1，表示 \(L_{r,c}\) 对其实际 received Available Input 具有更强的语义覆盖；较低 ESR 则表示在 Encoding transformation 中有更多输入语义未能在 LTM 中得到对应。由于使用了 baseline rescaling，ESR 不应被解释为严格的 0–1 retention probability 或“记住了多少百分比知识”，而仅作为不同 conditions 下 shared Encoder semantic correspondence 的诊断指标。空的 \(A_{r,c}\) 不进入 ESR 计算，因为这些轮次没有实际 instructional content 可供 Encoder 转换。

---

**SQ3 — Cumulative and downstream propagation**

SQ3 进一步从局部 transition 转向完整 processing chain，检验 Attention 和 WM 引起的信息变化是否能够累计传播到进入 Encoder 的信息、最终 Explicit LTM，以及 Assessment Phase 的 question performance。

首先，**Source-Word Availability Ratio (SWAR)** 衡量从原始 Source 出发，在依次经过 Attention 和 WM 后最终仍能够进入 Encoder 的 instructional information 比例：

\[
SWAR_{l,c}
=
\frac{
\sum_{r\in l}\operatorname{WordCount}(A_{r,c})
}{
\sum_{r\in l}\operatorname{WordCount}(S_r)
}.
\]

SWAR 越接近 1，表示原始 instructional information 中有越大比例最终到达 Shared Knowledge Encoder；SWAR 越低，则表示 Attention 与 WM 的累计上游限制越强。在相同的 lesson-level aggregation 下：

\[
SWAR_{l,c}
=
AAR_{l,c}
\times
WMAR_{l,c}.
\]

因此，SWAR 不是一个新的 cognitive mechanism measure，而是 Attention 和 WM 两个 upstream stages 的 cumulative information-availability outcome。

为辅助解释 SWAR 所反映的累计信息可用性结果，本研究进一步使用一个绝对词数分解视图，对四个 Study 1 conditions 下的冻结源词总量进行组成展示。对于任一条件 \(c\)，全语料的冻结 source-word count 被分解为最终仍可进入 Encoder 的 Available Input、被 Attention 移除的词数以及被 WM 移除的词数，即：

\[
W_{\text{source},c}
=
W_{\text{available},c}
+
W_{\text{attention-loss},c}
+
W_{\text{WM-loss},c}.
\]

其中，\(W_{\text{available},c}\) 对应所有 Teaching Rounds 中 \(A_{r,c}\) 的词数总和，\(W_{\text{attention-loss},c}\) 和 \(W_{\text{WM-loss},c}\) 则分别对应两种机制造成的累计 source-word loss。该分解作为对 SWAR 的补充性可视化分析，用于直观展示不同条件下 upstream information restriction 的组成及其归因来源。

其次，本研究使用 **End-to-End Semantic Recall (E2ESR)** 衡量完整 instructional source 与最终 Explicit LTM 之间的 semantic correspondence：

\[
E2ESR_{l,c}
=
\frac{1}{R_l}
\sum_{r\in l}
B_R(S_r,L_{r,c}),
\]

其中 \(R_l\) 表示 lesson \(l\) 中的 Teaching Round 数量。与 ESR 相同，\(B_R\) 使用冻结的 BERTScore Recall configuration [zhang2019bertscore]；但两者的比较对象和解释不同。ESR 比较：

\[
A_{r,c}\rightarrow L_{r,c},
\]

用于诊断 **Encoder 如何处理实际收到的信息**；E2ESR 则比较：

\[
S_r\rightarrow L_{r,c},
\]

用于描述 **从完整 Source 经过 Attention、WM 和 Encoding 后最终有多少 source semantics 仍能在 Explicit LTM 中得到对应**。对于最终没有形成 LTM entry 的 Teaching Round，该轮 E2ESR contribution 按冻结规则记为 0，从而使上游完全 information loss 能够体现在 cumulative knowledge-state measure 中。E2ESR 越高，表示最终 Explicit LTM 与原始教学内容具有更强的整体语义对应；越低则表示完整 learning pipeline 中累积的信息限制越明显。同样，E2ESR 是 semantic-correspondence measure，而不是人类知识保持百分比。

最后，Study 1 使用 **Checklist Score** 作为从完整 Source 到最终 Answer 的 downstream supporting outcome。问题、frozen atomic criteria、source evidence 以及 criterion-level Judge procedure 已在 Sections 3.2.6.2–3.2.6.3 中定义。对于包含 \(K_q\) 个 criteria 的问题 \(q\)，其得分为：

\[
ChecklistScore_{q,c}
=
10
\times
\frac{
\sum_{k=1}^{K_q}
\mathbf 1
\left[
\ell_{q,k,c}=\mathrm{Correct}
\right]
}{
K_q
}.
\]

其中，\(\ell_{q,k,c}\) 表示 condition \(c\) 下第 \(k\) 个 criterion 的 Judge label。`Absent` 和 `Contradicted` 均不获得分数，但作为不同的 diagnostic labels 分别保留。

在 Study 1 中，Checklist Score 不直接验证 Attention 或 WM 是否正确执行，而用于检验前述 mechanism execution 和 information-state changes 是否进一步传播至最终 assessment performance。因此，它属于 SQ3 的 downstream supporting evidence，而不是 RQ1 的独立机制证据。

上述三层指标的对应关系总结于 Table 3.X。

**Table 3.X. Evaluation measures for Study 1**

| Subquestion | Validation Target               | Measure         | Interpretation                                               |
| ----------- | ------------------------------- | --------------- | ------------------------------------------------------------ |
| **SQ1**     | Attention execution             | ATRF / NTPR     | Whether intended Attention targets are removed while non-target information is preserved |
| **SQ1**     | WM execution                    | WMTA / FRF      | Whether WM triggers at the registered threshold and applies the correct within-round removal rule |
| **SQ2**     | \(S_r \rightarrow P_{r,c}\)     | AAR             | Proportion of Source information remaining available after Attention |
| **SQ2**     | \(P_{r,c} \rightarrow A_{r,c}\) | WMAR            | Proportion of post-Attention information remaining available after WM |
| **SQ2**     | \(A_{r,c} \rightarrow L_{r,c}\) | ESR             | Semantic correspondence between actual Encoder input and generated Explicit LTM |
| **SQ3**     | \(S_r \rightarrow A_{r,c}\)     | SWAR            | Cumulative proportion of Source information reaching the Encoder |
| **SQ3**     | \(S_r \rightarrow L_{r,c}\)     | E2ESR           | End-to-end semantic correspondence between Source and Explicit LTM |
| **SQ3**     | Full pipeline → answer          | Checklist Score | Proportion of frozen assessment criteria correctly expressed in the final answer |

##### 3.5.2.4 Expected Patterns and Interpretation

Study 1 按照 SQ1–SQ3 的递进结构检验 mechanism execution、stage-specific transitions 与 cumulative propagation。所有预期均针对 aggregate-level patterns；除确定性 implementation-fidelity checks 外，不要求每篇 lesson 或每道 question 严格满足相同排序。

| Subquestion | Prespecified aggregate-level expectation |
|---|---|
| **SQ1 — Mechanism execution** | 所有 applicable fidelity measures 应达到 1.000，且不应出现 Attention 或 WM implementation violations。 |
| **SQ2 — Attention stage** | Attention ON 应降低 AAR；在保持 Attention setting 不变时，切换 downstream WM setting 不应改变 AAR。因此预期 \(AAR_{A0W0}=AAR_{A0W1}\)、\(AAR_{A1W0}=AAR_{A1W1}\)，且 Attention ON 条件低于对应的 Attention OFF 条件。 |
| **SQ2 — WM stage** | WM OFF 条件的 WMAR 应为 1；WM ON 仅在 processing demand 超过冻结 threshold 的 rounds 中产生额外限制，因此其 aggregate WMAR 应低于对应的 WM OFF 条件。 |
| **SQ2 — Shared Encoding** | 所有 conditions 使用相同 Encoder，因此不预设 ESR 的严格高低排序；预期不存在由 condition-specific Encoding procedure 造成的系统性 ESR 分化。 |
| **SQ3 — Cumulative propagation** | A1W1 应同时包含 Attention 和 WM 两类局部变化，并在 aggregate level 表现出最低或接近最低的 Source availability。相较于 A0W0，更强的 upstream restriction 应对应较低的 SWAR 和 E2ESR。 |
| **SQ3 — Downstream outcome** | Checklist Score 用于检验上游变化是否进一步传播至 assessment performance。预期 aggregate score 随累计限制增强而下降，但不要求每道题或每篇教材严格单调。 |

A0W0 仍经过 shared Knowledge Encoding，因此是 encoding-only reference，而不是 perfect-memory baseline。Checklist Score 只作为 cumulative propagation 的 downstream supporting evidence；Attention 与 WM 的 mechanistic validity 仍主要由 SQ1 的 execution fidelity 和 SQ2 的 stage localisation 共同建立。

#### 3.5.3 Study 2 — Comparative Representational Validity

##### 3.5.3.1 Research Question and Subquestions

Study 2 对应 RQ2，旨在比较 persona prompting 与 CPB 两种 learner representation 在受控 distraction 和 instructional processing demand 下是否表现出不同的 behavioural sensitivity。RQ2 为：

> **RQ2 — Representation:** Compared with persona prompting, does CPB produce learning behaviour that shows more theoretically consistent sensitivity to controlled distraction and processing demand?

由于 RQ2 同时涉及 representation 内部是否能够产生稳定区分，以及不同 representations 是否会对理论相关的外部操纵表现出系统性响应，因此仅比较总体平均分不足以回答这一问题。为此，本研究将 RQ2 进一步拆分为四个相互衔接的 Subquestions (SQs)。前两个 SQ 分别检验 persona prompting 和 CPB 在各自 representation 内部是否产生可解释的 behavioural differentiation；后两个 SQ 则进一步比较两种 representation 对 controlled distraction 和 instructional processing demand 的敏感性。整体结构如 Table 3.X 所示。

**Table 3.X. Subquestions and validation focus for Study 2**

| Subquestion | Validation Focus              | Evidence Sought                                              |
| ----------- | ----------------------------- | ------------------------------------------------------------ |
| **SQ1**     | Persona differentiation       | Whether Prompt-NT, Moderate-Intensity Prompt-ADHD and High-Intensity Prompt-ADHD produce distinguishable learning behaviour |
| **SQ2**     | Graded CPB response           | Whether increasing CPB constraint severity produces a systematic ordinal change in learning performance |
| **SQ3**     | Distraction sensitivity       | Whether the two representations differ systematically in their behavioural response to controlled distraction |
| **SQ4**     | Processing-demand sensitivity | Whether the two representations differ systematically in their sensitivity to instructional processing demand |

**SQ1 — Persona differentiation:**  

> **Does persona prompting produce distinguishable and intensity-sensitive learning behaviour across Prompt-NT, Moderate-Intensity Prompt-ADHD and High-Intensity Prompt-ADHD learners?**

SQ1 首先检验 persona prompting 是否能够仅通过 persona-level learner description 在最终 learning behaviour 上形成稳定区分。Persona conditions 包含一个 Prompt-NT learner，以及两个使用不同 ADHD-description intensity 的 learners：Moderate-Intensity Prompt-ADHD 和 High-Intensity Prompt-ADHD。在相同 teaching materials、assessment questions 和 scoring procedure 下，本研究同时检验 NT 与 ADHD-related personas 之间是否形成可重复的 performance differentiation，以及两种 ADHD intensity 是否对应可辨识的 behavioural pattern。如果三种 Prompt learners 的差异仅停留在语言风格或回答措辞层面，而没有形成稳定的 performance differentiation，则说明 persona prompting 对 ADHD-related learning characteristics 及其 intensity 差异的 behavioural representation 较弱。该 subquestion 因此首先建立 persona representation 自身的内部比较基线，而不要求其差异能够被定位到某个显式 cognitive-processing stage。

**SQ2 — Graded CPB response:**  

> **Does increasing CPB constraint severity produce a systematic graded change in learning performance?**

SQ2 检验 CPB 的 factorised representation 是否能够随着 registered constraint severity 的增强形成有序的 behavioural response。Study 2 使用 CPB Zero、Low、Medium 和 High 四个 graded conditions，其中 Attention susceptibility 和 WM capacity 按预先定义的参数逐步增强约束。该 subquestion 关注的不是某一个 condition 是否单独产生较低得分，而是 Zero → Low → Medium → High 是否在 aggregate learning performance 上形成可解释的 ordinal pattern，从而表明 CPB 的 behavioural output 与其内部 constraint severity 建立了系统对应关系。

**SQ3 — Distraction sensitivity:**  

> **How do persona prompting and CPB differ in their sensitivity to controlled distraction?**

SQ3 比较两种 learner representation 在 clean 和 distracted materials 下的 behavioural change。对于 persona prompting，本研究检验 Prompt-NT、Moderate-Intensity Prompt-ADHD 和 High-Intensity Prompt-ADHD 是否表现出可区分的 distraction-related performance change；对于 CPB，则检验 Zero、Low、Medium 和 High conditions 对 controlled distraction 的响应是否随 constraint severity 系统变化。该 subquestion 不关注哪一种 representation 的绝对得分更低，而是比较其 behavioural outputs 是否对 controlled distraction 表现出稳定且与 representation design 一致的敏感性。具体的材料条件、运行设置和 distraction-effect 计算方法将在下一节说明。

**SQ4 — Processing-demand sensitivity:**  

> **How do persona prompting and CPB differ in their sensitivity to instructional processing demand?**

SQ4 最后比较两种 representation 对 instructional processing demand 的 behavioural sensitivity。对于 persona prompting，本研究检验 Prompt-NT、Moderate-Intensity Prompt-ADHD 和 High-Intensity Prompt-ADHD 的 question performance 是否随 source-round processing demand 呈现不同关系；对于 CPB，则检验随着 constraint severity 增强，higher-demand instructional content 是否带来更明显的 performance cost。由于 processing demand 在本研究中主要对应 Working-Memory-related constraint，SQ4 用于判断两种 representation 是否能够对这一受控、理论相关的 instructional variable 表现出系统性差异。

由此，Study 2 形成从 representation-internal differentiation 到 cross-representation sensitivity comparison 的递进结构：

\[
\text{Persona Differentiation}
\rightarrow
\text{Graded CPB Response}
\rightarrow
\text{Distraction Sensitivity}
\rightarrow
\text{Processing-Demand Sensitivity}.
\]

所以，RQ2 并不依赖两种 representation 的绝对 performance 高低，而是分别检验两种模拟方式内部 differentiation 是否成立，以及其 behavioural outputs 是否会对 controlled distraction 和 instructional processing demand 产生系统、理论一致的响应。下一节在此基础上介绍 Study 2 的 experimental design and conditions。

##### 3.5.3.2 Experimental Design and Conditions

Study 2 采用 **learner-condition × material-condition fully crossed design**。Learner condition 由三种 persona-prompted learners 和四种 CPB learners 构成；每种 learner condition 均分别接受 clean materials 和 distracted materials，并在每个组合下独立运行5次。

Persona-prompted branch 包含 Prompt-NT、Moderate-Intensity Prompt-ADHD 和 High-Intensity Prompt-ADHD 三种 learner conditions。其中，两种 Prompt-ADHD conditions 的 persona descriptions 采用 Gonnermann-Müller et al. 在教育情境中提供的 text-based ADHD intensity prompts [gonnermann2026llm]。两种 descriptions 使用相同的 ADHD-related behavioural content，并通过频率副词调整描述强度：Moderate-Intensity condition 主要使用 *sometimes*、*occasionally* 和 *somewhat*，而 High-Intensity condition 主要使用 *often*、*frequently* 和 *regularly*。Prompt-NT 不包含 ADHD-specific cognitive description，作为 persona-prompted reference condition。

CPB branch 包含 Zero、Low、Medium 和 High 四种 conditions。CPB Zero 保留 Teaching Round processing、shared Knowledge Encoding、Explicit LTM accumulation 和 memory-constrained answering，但关闭两种 information-loss mechanisms，因此作为 **zero-constraint CPB reference**。该条件不产生 Attention- 或 WM-attributed information loss，但仍然保留完整的 CPB architecture。Low、Medium 和 High conditions 则同时改变 Attention trigger probability 与 WM capacity threshold，以形成逐步增强的 processing constraints。它们是为实验控制而设置的参数组合，不代表临床 ADHD severity categories。

**Table 3.X. Learner conditions used in Study 2**

| Learner condition | Representation | Representation-specific manipulation | Attention probability | WM capacity |
|---|---|---|---:|---:|
| **Prompt-NT** | Persona prompting | No ADHD-specific description | N/A | N/A |
| **Prompt-ADHD — Moderate** | Persona prompting | Moderate-intensity ADHD description | N/A | N/A |
| **Prompt-ADHD — High** | Persona prompting | High-intensity ADHD description | N/A | N/A |
| **CPB Zero** | CPB | Attention and WM restrictions disabled | 0.00 | \(10^{10}\) bits |
| **CPB Low** | CPB | Low processing constraint | 0.20 | \(362.099\) bits (\(Q_{2/3}\)) |
| **CPB Medium** | CPB | Medium processing constraint | 0.50 | \(321.994\) bits (\(Q_{1/2}\)) |
| **CPB High** | CPB | High processing constraint | 0.80 | \(246.930\) bits (\(Q_{1/3}\)) |

两种 material conditions 均来自同一套冻结的七篇 teaching materials。Clean condition 使用不包含 distractor events 的 instructional text；distracted condition 使用在预先映射位置包含冻结 distractor events 的instructional text。除 distractor events 外，两个版本保持相同的教学内容、Teaching Round boundaries、sentence identifiers 和顺序。由此，material condition 的变化不会同时改变课程主题、问题范围或教学结构。

Persona-prompted learners 与 CPB learners 接收相同的 Teaching Round sequence，但使用不同的 learner-representation pipeline。对于 persona prompting，每个 Teaching Round 按原始顺序加入完整对话历史，并在每轮后插入固定的 `OK` acknowledgement。教学结束后，每道 assessment question 均从同一个冻结的 post-exposure conversation history 独立分支，避免较早的问题和答案为后续问题提供额外信息。该 branch 不生成显式的 Knowledge Encoding entry 或 Explicit LTM。

对于 CPB learners，每个 Teaching Round 依次经过 Attention、WM processing 和 shared Knowledge Encoding。Attention trigger 根据 condition-specific probability 和已保存的 random seed 决定；当 trigger 发生时，冻结的 target information 通过 hard deletion 变得 unavailable。随后，WM mechanism 依据对应的 capacity threshold 处理 Post-Attention Input，Shared Knowledge Encoder 再将最终 Available Input 转换为 round-level Explicit LTM entry。Assessment Phase 仅向学生提供该 lesson 生成的 Explicit LTM，而不重新提供完整教学材料。

两种 branches 均使用 DeepSeek V4 Flash 作为 student model，并共享相同的 frozen teaching materials、assessment questions 和 scoring framework。其回答阶段则遵循各自的 representation architecture：Prompt learners 基于冻结的完整 post-exposure conversation context 回答，而 CPB learners 仅基于冻结的 Explicit LTM 回答。每篇教材包含六道 independent questions 和一道 cross-round integrative question，因此七篇教材共包含 42 道 independent questions 和 7 道 integrative questions。

七个 learner conditions 分别与两种 material conditions 交叉，并在每个 condition–material cell 中运行五次：

\[
7\ \text{learner conditions}
\times
2\ \text{material conditions}
\times
5\ \text{runs}
=
70\ \text{simulated-learner runs}.
\]

由于每次 run 覆盖七篇教材和全部 49 道问题，Study 2 共形成：

\[
70\times7=490
\]

个 lesson-level learning sessions，以及：

\[
70\times49=3,430
\]

份 assessment answers。每个 run 均使用独立的 run identifier；CPB conditions 进一步保存 Attention sampling seed、实际 trigger records、WM processing records、Explicit LTM 和 answer files，以保证 stochastic Attention trajectories 可以复现。Prompt conditions 则保存完整的 round-wise classroom history 和各问题的独立 answer record。

所有 3,430 份 answers 最终使用同一个冻结的 `qwen3.7-max` criterion-level LLM Judge 进行评分。Judge 仅接收冻结问题、reference answer、atomic checklist criteria、source evidence 和对应 student answer，不接收 learner identity、representation condition、material condition 或 run label。Judge 返回的 criterion-level results 随后与本地实验 metadata 重新关联。具体评分指标及其与四个 Subquestions 的对应关系将在 Section 3.5.3.3 中说明。

##### 3.5.3.3 Evaluation Measures

Study 2 的四个 Subquestions 共用同一组基础 outcome measures。换言之，SQ1–SQ4 并不分别定义彼此独立的学习表现指标，而是基于相同的题目级评分结果，从不同比较维度检验 persona differentiation、graded CPB response、distraction sensitivity 和 processing-demand sensitivity。本研究将每一道 assessment question 在同一 learner condition 和 material condition 下的 5 次独立运行作为重复观测，并首先在 question level 计算平均 Checklist Score 和 run-to-run standard deviation (SD)。这两个量构成后续所有 Study 2 分析的核心基础；response word count 则作为描述性的回答特征，用于辅助判断不同条件是否伴随系统性的回答长度变化，而不被解释为 learning performance 本身。

对于问题 \(q\)、learner condition \(c\)、material condition \(m\) 和第 \(j\) 次运行，记 Checklist Score 为 \(S_{q,c,m,j}\)。题目级平均得分定义为：

\[
\bar S_{q,c,m}
=
\frac{1}{5}
\sum_{j=1}^{5}
S_{q,c,m,j}.
\]

\(\bar S_{q,c,m}\) 表示给定 learner 和 material condition 下，对问题 \(q\) 的平均 assessment performance。所有更高层级的汇总均以该 question-level mean 为基础，包括全部 49 道题的 overall mean、按七篇教材计算的 lesson-level mean、42 道 independent questions 的平均得分，以及 7 道 cross-round integrative questions 的平均得分。由此，Study 2 保持统一的聚合顺序：

\[
\text{Run-level Score}
\rightarrow
\text{Question-level Mean}
\rightarrow
\text{Lesson / Question-Type / Overall Summary}.
\]

同一道题五次独立运行之间的稳定性使用 question-level run-to-run SD 表示：

\[
SD_{q,c,m}
=
\sqrt{
\frac{
\sum_{j=1}^{5}
\left(
S_{q,c,m,j}-\bar S_{q,c,m}
\right)^2
}{
5-1
}
}.
\]

该计算使用 sample standard deviation，即自由度为 \(5-1=4\)，与实验实现所采用的 `ddof=1` 一致。SD 与 Checklist Score 使用相同量纲，因此能够直接表示同一 experimental condition 下重复生成结果的波动程度。较低的 SD 表示同一道题在五次运行中的 performance 较稳定，较高的 SD 则表示更大的 run-to-run variability。后续分析可进一步对 question-level SD 按教材、题型或全部问题进行汇总。本文统一使用 SD 而不同时报告 variance，以避免重复表达同一类稳定性信息。

除 performance 和 stability 外，本研究还记录 student answer 的 word count 作为 descriptive response characteristic。对于每道题，同样首先在五次运行上计算平均 response length。该指标用于辅助检查不同 persona 或 CPB conditions 是否系统地产生更长或更短的回答，以及某些 score differences 是否伴随 response verbosity 的变化。Response length 不被视为知识掌握程度或 learning effectiveness 的直接指标。

---

**SQ1 — Persona Differentiation**

SQ1 检验 Prompt-NT、Moderate-Intensity Prompt-ADHD 和 High-Intensity Prompt-ADHD 是否形成可辨识且与 persona intensity 对应的 behavioural differentiation。主要分析基于三种 Prompt learners 的 question-level mean Checklist Score，并分别在 clean 和 distracted materials 下进行比较。

首先报告三种 Prompt conditions 的 overall mean performance 及其平均 question-level SD，用于描述 persona conditions 之间的总体 performance difference 和 run-to-run stability。其次按七篇 teaching materials 分别汇总 mean score 和 SD，以检查观察到的 persona differentiation 是否具有跨教材一致性，而不是由单一 lesson 驱动。Independent 和 integrative questions 也分别报告平均得分和 SD，用于描述 persona differences 是否随 question structure 发生变化。

为量化 persona intensity 的有序性，本研究进一步计算 **Ordering Consistency Rate (OCR)**。对于 material condition \(m\)，Prompt ordering 定义为：

\[
\bar S_{q,\mathrm{NT},m}
\ge
\bar S_{q,\mathrm{Moderate},m}
\ge
\bar S_{q,\mathrm{High},m}.
\]

Prompt OCR 为满足这一 non-increasing ordering 的 questions 占全部 eligible questions 的比例：

\[
OCR_{\mathrm{Prompt},m}
=
\frac{
\#\left\{
q:
\bar S_{q,\mathrm{NT},m}
\ge
\bar S_{q,\mathrm{Moderate},m}
\ge
\bar S_{q,\mathrm{High},m}
\right\}
}{
Q
}.
\]

OCR 越接近 1，表示 Prompt-NT → Moderate → High 的 intensity ordering 在更多问题上得到保持；较低 OCR 则表示 persona intensity 与 question-level performance 之间缺乏一致的有序对应。由于 Checklist Score 允许不同 conditions 得到相同分数，本研究采用 non-strict ordering，以保留 ties。

---

**SQ2 — Graded CPB Response**

SQ2 使用相同的基础 outcome measures 检验 CPB Zero、Low、Medium 和 High 是否随着 registered constraint severity 增强形成系统性的 graded performance pattern。与 SQ1 相同，首先报告四种 CPB conditions 在 clean 和 distracted materials 下的 overall mean Checklist Score 和 question-level SD，再按教材及 Independent / Integrative question types 分别汇总。

CPB constraint gradient 进一步通过 Ordering Consistency Rate 量化。对于 material condition \(m\)，预期的 non-increasing ordering 定义为：

\[
\bar S_{q,\mathrm{Zero},m}
\ge
\bar S_{q,\mathrm{Low},m}
\ge
\bar S_{q,\mathrm{Medium},m}
\ge
\bar S_{q,\mathrm{High},m}.
\]

因此：

\[
OCR_{\mathrm{CPB},m}
=
\frac{
\#\left\{
q:
\bar S_{q,\mathrm{Zero},m}
\ge
\bar S_{q,\mathrm{Low},m}
\ge
\bar S_{q,\mathrm{Medium},m}
\ge
\bar S_{q,\mathrm{High},m}
\right\}
}{
Q
}.
\]

较高的 CPB OCR 表示 constraint severity 与 question-level performance 之间具有更稳定的 ordinal correspondence。该 measure 同时为 Study 3 提供一个 baseline ordering，使后续可以直接检验加入 Language Ability 和 Big Five attributes 后，原有 CPB gradient 是否仍被保持。

---

**SQ3 — Distraction Sensitivity**

SQ3 使用七种 learner conditions 在 clean 和 distracted materials 下的配对结果量化 distraction-associated performance change。对于问题 \(q\) 和 learner condition \(c\)，distraction cost 定义为：

\[
\Delta D_{q,c}
=
\bar S_{q,c,\mathrm{clean}}
-
\bar S_{q,c,\mathrm{distracted}}.
\]

因此，\(\Delta D_{q,c}>0\) 表示该问题在 distracted condition 下得分下降，数值越大表示更强的 distraction-associated performance cost；接近 0 表示 clean 与 distracted conditions 之间变化较小；负值则表示 distracted condition 下得分反而更高。

对每种 learner condition，question-level distraction costs 随后按全部问题、lesson 以及 Independent / Integrative question types 进行汇总。这样可以分别比较 Prompt-NT、Moderate-Intensity Prompt-ADHD、High-Intensity Prompt-ADHD 以及 CPB Zero、Low、Medium、High 的 distraction sensitivity。

---

**SQ4 — Processing-Demand Sensitivity**

SQ4 检验 question performance 是否随着 instructional processing demand 增加而系统变化。主要分析限定于 42 道 independent questions，因为每一道 independent question 均能够映射到一个明确的 source Teaching Round 及其冻结的 Processing Demand Bits (PDB)；cross-round integrative questions 涉及多个 Teaching Rounds，因此不存在唯一的 single-round PDB，不纳入主要 continuous-demand analysis。

首先，将 42 道 independent questions 按其 source-round PDB 从低到高排序，并绘制不同 learner conditions 的 question-level mean Checklist Score 随 PDB 变化的 performance profile。该可视化用于直观检查 higher processing demand 是否伴随 systematic performance decline，以及这种关系是否随 persona intensity 或 CPB constraint severity 而改变。

Processing-demand sensitivity 的主要量化指标为 PDB–score slope。对于每个 learner condition 和 material condition，拟合：

\[
\bar S_q
=
\alpha
+
\beta_{\mathrm{PDB},100}
\left(
\frac{PDB_q}{100}
\right)
+
\varepsilon_q.
\]

其中，\(PDB_q/100\) 将 source-round processing demand 缩放为 100-bit units，\(\beta_{\mathrm{PDB},100}\) 因而表示 PDB 每增加 100 bits 时 Mean Checklist Score 的估计变化，而不是每增加 1 bit 的未缩放变化。若 \(\beta_{\mathrm{PDB},100}\) 接近 0，表示 performance 与 PDB 之间缺乏明显线性关系；若 \(\beta_{\mathrm{PDB},100}<0\)，表示 higher-demand source rounds 与较低 question performance 相关；数值越负，则表示对 processing demand 的 performance sensitivity 越强。

作为不依赖线性假设的 supporting analysis，本研究同时计算 PDB 与 question-level mean Checklist Score 之间的 Spearman rank correlation \(\rho\)。负向 \(\rho\) 表示 PDB 越高时 performance 整体倾向越低，越接近 \(-1\) 表示这种 monotonic negative relationship 越稳定。

此外，基于材料构建阶段预先定义的 Low- 和 High-demand independent questions，本研究报告：

\[
\Delta_{\mathrm{Demand},c}
=
\bar S_{\mathrm{Low\ demand},c}
-
\bar S_{\mathrm{High\ demand},c}.
\]

正值表示 High-demand questions 的平均 performance 低于 Low-demand questions；数值越大，表示 higher instructional processing demand 对该 learner condition 的 performance cost 越明显。该 Low–High gap 主要作为便于解释的 descriptive summary，而 continuous PDB–score relationship 构成 SQ4 的主要 demand-sensitivity evidence。

---

Independent 与 Integrative question performance 不作为独立的第五个 Subquestion，而作为贯穿 SQ1–SQ3 的共同 question-structure reporting dimension。对于 SQ4，由于 integrative questions 无法唯一映射至单个 source-round PDB，其结果仅作为 supplementary question-structure evidence 报告，而不进入主要 processing-demand sensitivity analysis。

Table 3.X 总结了 Study 2 四个 Subquestions 与其主要比较方式之间的对应关系。

**Table 3.X. Evaluation framework for Study 2**

| Subquestion                             | Core Comparison                | Primary Outcome                          | Supporting Evidence                                          |
| --------------------------------------- | ------------------------------ | ---------------------------------------- | ------------------------------------------------------------ |
| **SQ1 — Persona differentiation**       | Prompt-NT → Moderate → High    | Question-level Mean Checklist Score      | Run-to-run SD, Prompt OCR, by-lesson and question-type summaries |
| **SQ2 — Graded CPB response**           | CPB Zero → Low → Medium → High | Question-level Mean Checklist Score      | Run-to-run SD, CPB OCR, by-lesson and question-type summaries |
| **SQ3 — Distraction sensitivity**       | Clean → Distracted             | Distraction cost \(\Delta D\)            | SD change, lesson-level and question-type decomposition, response-length change |
| **SQ4 — Processing-demand sensitivity** | Increasing source-round PDB    | PDB–score slope per 100 bits \(\beta_{\mathrm{PDB},100}\) | Spearman \(\rho\), Low–High demand gap                       |

##### 3.5.3.4 Expected Patterns and Interpretation

Study 2 按照 SQ1–SQ4 的递进结构检验 representation-internal differentiation、graded CPB response，以及两种 learner representation 对 controlled distraction 和 instructional processing demand 的 behavioural sensitivity。所有预期均针对 aggregate-level patterns；除明确的 ordering measures 外，不要求每一道 question、每一篇 lesson 或每一次 run 都严格满足相同排序。Study 2 的重点也不是将较低得分直接解释为“更像 ADHD”，而是检验 behavioural outcome 是否与预先操纵的 learner representation、distraction condition 和 processing demand 建立系统且理论一致的对应关系。

| Subquestion                             | Prespecified aggregate-level expectation                     |
| --------------------------------------- | ------------------------------------------------------------ |
| **SQ1 — Persona differentiation**       | Prompt-NT、Moderate-Intensity Prompt-ADHD 和 High-Intensity Prompt-ADHD 应表现出可辨识的 behavioural differentiation。若 persona intensity 能够映射到 learning performance，则三种 Prompt conditions 应在 overall、lesson-level 或 question-type summaries 中形成稳定的差异，并表现出较高的 Prompt Ordering Consistency Rate。 |
| **SQ2 — Graded CPB response**           | CPB Zero、Low、Medium 和 High 应随 registered constraint severity 增强形成有序的 aggregate performance pattern。预期更强的 CPB constraint 对应更低或不高于较弱 constraint 的 Checklist Score，并表现出较高的 CPB Ordering Consistency Rate。 |
| **SQ3 — Distraction sensitivity**       | 对同一 learner condition，distracted materials 相对于 clean materials 应产生可量化的 performance change。若 representation 对 controlled distraction 具有理论一致的 sensitivity，则 ADHD-related Prompt conditions 和更强 CPB constraints 应表现出更大的 aggregate distraction cost \(\Delta D\)，而不是仅表现为绝对分数差异。 |
| **SQ4 — Processing-demand sensitivity** | 随 source-round PDB 增加，question performance 应表现出更明显的下降趋势。若 WM-related constraint representation 具有理论一致性，则更强 CPB constraints 应对应更负的 PDB–score slope 和更强的负向 rank association；Prompt conditions 则用于检验 persona intensity 是否同样形成可区分的 demand sensitivity。 |

对于 SQ1 和 SQ2，Independent 与 Integrative question performance 将作为共同的 question-structure dimension 分别报告，用于观察 representation-internal differentiation 是否在不同题型下呈现不同模式，但不构成独立的第五个 Subquestion。Run-to-run SD 用于描述相同 learner × material condition 下 performance 的稳定性，而 response word count 仅作为 descriptive response characteristic，不用于直接判断 learning effectiveness。

对于 SQ3，distraction sensitivity 通过同一 learner condition 在 clean 与 distracted materials 之间的得分差异进行识别：

\[
\Delta D_{q,c}
=
\bar S_{q,c,\mathrm{clean}}
-
\bar S_{q,c,\mathrm{distracted}}.
\]

因此，较大的正向 \(\Delta D\) 表示更明显的 distraction-associated performance cost；接近 0 表示两种 material conditions 下表现变化较小。跨 representation 的比较重点在于这一 behavioural sensitivity 是否随 persona intensity 或 CPB constraint severity 呈现系统变化，而不是比较哪一种 representation 的绝对得分更低。

对于 SQ4，主要预期建立在 42 道能够映射至单一 source-round PDB 的 Independent Questions 上。Higher processing demand 预期与较低 performance 相关，因此更负的 \(\beta_{\mathrm{PDB},100}\) 或 Spearman \(\rho\) 表示更强的 demand sensitivity。由于 cross-round Integrative Questions 不对应唯一的 single-round PDB，其结果仅作为 supplementary question-structure evidence，不进入主要 continuous processing-demand analysis。

总体而言，Study 2 的理论一致性判断依赖以下证据链：

\[
\text{Representation-internal differentiation}
\rightarrow
\text{systematic response to distraction}
\rightarrow
\text{systematic response to processing demand}.
\]

因此，RQ2 的比较重点不是要求 CPB 在所有条件下产生更低的分数，而是检验其 behavioural patterns 是否比 persona prompting 更稳定地对应到实验中显式操纵的 Attention- 和 WM-related demands。上述预期同时建立了 Study 3 的 behavioural baseline，使后续能够使用相同的 performance、stability 和 ordering measures 检验新增 learner attributes 是否破坏这些在 Study 2 中建立的 learning-related patterns。



#### 3.5.4 Study 3 — Multidimensional Representational Robustness

##### 3.5.4.1 Research Question and Subquestions

Study 3 对应 RQ3，检验当额外引入 functionally heterogeneous learner-profile prompts 后，joint persona prompting 与 factorised CPB representation 在多大程度上保持 Study 2 所建立的 behavioural baseline。RQ3 为：

> **RQ3 — Multidimensional Robustness:** When additional functionally heterogeneous learner-profile prompts are introduced, does a factorised CPB representation better preserve its Study 2 behavioural outcomes, learner-condition ordering, and processing-demand sensitivity than joint persona prompting?

Study 3 不要求加入额外 attributes 后 final score 完全不变。相反，本研究从三个相互衔接的层面量化 robustness：首先检验平均得分、重复运行波动和回答长度相对于 matched Study 2 baseline 偏移了多少；其次检验 Study 2 中 matched learner conditions 的 question-level ordering 是否在 A1–B2 profiles 下保持；最后检验 performance 与 source-round Processing Demand Bits (PDB) 之间的关系是否发生改变。Language Ability（High/Low）与 Big-Five composite（learning-congruent/learning-challenging）交叉形成 A1–B2 四种受控 attribute profiles，其中 A1/A2 是两个方向一致的 configurations，B1/B2 是两个方向冲突的 configurations。四种 profiles 均作为完整的 prompt additions 进行分析，而不进一步估计独立的 Language main effect、BF main effect 或二者的 statistical interaction。

\[
\begin{array}{c|cc}
 & BF_{\mathrm{congruent}} & BF_{\mathrm{challenging}}\\
\hline
Language_{\mathrm{High}} & A1 & B1\\
Language_{\mathrm{Low}} & B2 & A2
\end{array}
\]

为此，RQ3 被划分为三个 Subquestions (SQs)。三个 SQ 使用相同的 Study 2 distracted-arm matched baselines，但分别检验 outcome level、ordering level 和 processing-demand relationship level 的保持程度。

**SQ1 — Baseline-relative outcome displacement**

> **How much do mean performance, run-to-run variability, and response length change after Language Ability and Big-Five profile prompts are added, relative to the matched Study 2 baseline?**

SQ1 将每个 Study 3 learner-type × profile condition 与相同 learner type 在 Study 2 distracted arm 中的结果配对，分别量化 Mean Checklist Score、question-level run-to-run SD 和 Mean Response Word Count 的绝对偏移与相对偏移率。该分析回答新增 profile prompts 对最终 outcome、重复运行稳定性及回答形式造成了多大扰动。

**SQ2 — Matched-ordering preservation**

> **Are the matched learner-condition orderings observed in Study 2 preserved across the A1–B2 profiles?**

SQ2 在 question level 检验 matched learner-condition ordering 是否保持。Prompt branch 使用 Study 2 distracted arm 中 Moderate-Intensity 与 High-Intensity Prompt-ADHD 的 matched ordering；CPB branch 使用 Low、Medium 与 High constraints 的 matched ordering。各 profile 的 Ordering Consistency Rate (OCR) 与对应 Study 2 baseline 比较，并单独报告 tie rate，以区分严格保持、因得分相等而保持及违反预期方向三种情况。

**SQ3 — Processing-demand sensitivity preservation**

> **Does the relationship between source-round Processing Demand Bits and question performance change after the additional profiles are introduced?**

SQ3 复用 Study 2 的 processing-demand analysis，检验新增 profile prompts 后，42 道能够唯一映射到 source Teaching Round 的 Independent Questions 所呈现的 PDB–performance relationship 是否改变。主要比较每个 matched learner condition 在 Study 3 profile 下与其 Study 2 distracted baseline 之间的 PDB–score slope change；Spearman rank correlation 与 Low–High demand gap 作为 supporting evidence。由此，SQ3 关注的是既有 WM/PDB-related behavioural sensitivity 的偏移。

由于 Study 3 不独立验证生成答案是否忠实体现预设的 Language Ability 或 Big-Five constructs，其结论仅限于 **robustness under the addition of Language Ability and Big-Five profile prompts**，而不是这些 learner traits 的准确模拟。

##### 3.5.4.2 Experimental Design and Conditions

Study 3 采用 **learner-type × attribute-profile crossed design**，检验加入 Language Ability 与 Big-Five characteristics 后，Prompt-based 与 CPB-based ADHD representations 相对于 Study 2 matched baselines 的 outcome displacement、matched ordering 和 processing-demand sensitivity 是否保持。实验对象包括两种 Prompt-ADHD learners 和三种 CPB learners，如 Table 3.X 所示。

**Table 3.X. Learner types included in Study 3**

| Representation | Learner type |
|---|---|
| **Prompt** | Moderate-Intensity Prompt-ADHD |
| **Prompt** | High-Intensity Prompt-ADHD |
| **CPB** | CPB Low constraint |
| **CPB** | CPB Medium constraint |
| **CPB** | CPB High constraint |

Prompt branch 延用 Study 2 的 Moderate-Intensity 与 High-Intensity ADHD descriptions，CPB branch 延用 Low、Medium 与 High 三组 Attention/WM constraints。Prompt-NT 与 CPB Zero 不进入本研究；上述五类 learners 在 Study 2 distracted arm 中的结果作为加入额外属性之前的 matched baselines。

###### Added Attributes and Representative Profiles

为控制 Study 3 的实验范围，本研究不对全部 Big-Five 维度及其高低组合进行穷举，而是在 Liu et al. (2024) 的 personality-aware student simulation framework 基础上 [liu-etal-2024-personality]，选取三个在当前学习情境中具有较明确解释意义的维度：Openness、Conscientiousness 和 Neuroticism。基于这三个维度，本研究构造两个对比性的 Big-Five composite profiles：High Openness、High Conscientiousness 和 Low Neuroticism 构成 **learning-congruent BF**，而 Low Openness、Low Conscientiousness 和 High Neuroticism 构成 **learning-challenging BF**。这两个 profiles 旨在提供方向明确的实验性人格对照，而不被视为对完整 Big-Five personality space 的穷尽性表示。**Learning-congruent** 与 **learning-challenging** 是本研究为构造受控对比而定义的 directional cue labels；它们并不意味着 Liu et al. 已经证明这些 composite profiles 对学习具有因果性的促进或损害作用。

新增的 Language Ability prompt descriptions 同样取自 Liu et al. (2024) [liu-etal-2024-personality]。Language Ability 分为 High 与 Low：High Language Ability 主要表现为较完整、语法规范的句子组织，而 Low Language Ability 则允许较零散的表达及一定程度的语法不完整。该属性主要用于控制回答层面的语言组织与表达形式，而不直接表示 learner 所获得的 knowledge quantity。

随后，本研究将两种 Big-Five composite profiles 与 High/Low Language Ability 交叉组合，形成四个具有明确对比意义的 multidimensional learner profiles。该设计以有限数量的代表性组合检验完整 profile-prompt additions 所产生的 outcome displacement，同时避免因穷举全部人格维度及其组合而使实验规模失去控制。

**Table 3.Y. Contrastive Language Ability and Big-Five profiles in Study 3**

| Group | Profile | Language Ability | Big-Five composite | Attribute relationship | Experimental role |
|---|---|---|---|---|---|
| **A — Aligned** | **A1 — Learning-Congruent Alignment** | High | High O, High C, Low N | Both components are directionally learning-congruent | Learning-congruent aligned configuration |
| **A — Aligned** | **A2 — Learning-Challenging Alignment** | Low | Low O, Low C, High N | Both components are directionally learning-challenging | Learning-challenging aligned configuration |
| **B — Conflicting** | **B1 — High Language / Learning-Challenging BF** | High | Low O, Low C, High N | Language and BF cues point in different directions | Cross-attribute separability test |
| **B — Conflicting** | **B2 — Low Language / Learning-Congruent BF** | Low | High O, High C, Low N | Language and BF cues point in different directions | Cross-attribute separability test |

A1 与 A2 是两个 **aligned configurations**，其中 Language Ability 和 BF cues 分别共同指向 learning-congruent 或 learning-challenging 特征；B1 与 B2 是两个 **conflicting configurations**，其中两类 cues 指向相反方向。四个 cells 共同提供对一致与冲突属性关系的代表性覆盖，但在正式分析中均被视为完整的 profile-prompt additions，而不拆分为独立 main effects 或 interaction。

###### Representation-Specific Attribute Placement

两种 representations 使用相同的 Language Ability 与 BF descriptions，但属性放置方式不同，如 Figure 3.X 所示。Prompt branch 将 ADHD description、Language Ability 和 Personality Description 共同置于 student prompt；CPB branch 仍通过 Attention/WM mechanisms 表示 ADHD-related processing differences，并仅在 memory-constrained answering stage 加入 Language Ability 与 Personality Description。因此，新增属性用于调节 CPB learner 的回答生成，而 ADHD-related processing differences 仍由既有 CPB mechanisms 表示。

![RQ3 prompt-structure comparison](</Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter3/export/ch03_rq3_prompt_structure_comparison.png>)

**Figure 3.X. Placement of additional learner attributes in joint Prompt-ADHD and factorised CPB-ADHD representations.** In the joint Prompt-ADHD representation, the ADHD description, Language Ability, Personality Description, and Core Student Instruction jointly condition answer generation from the complete frozen classroom context. In CPB-ADHD, ADHD-related differences are implemented through the Attention and Working-Memory mechanisms; Language Ability and Personality Description are introduced only in the memory-constrained response-generation layer. The figure compares the **profile-related prompt components**, rather than the complete Prompt payload; the CPB side therefore omits the unchanged Memory Restriction, Explicit LTM, and Question components.

/Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter3/export/ch03_rq3_prompt_structure_comparison.png

###### Experimental Procedure and Scale

Study 3 仅使用与 Study 2 distracted arm 相同的七篇冻结 teaching materials；clean materials 不进入本研究。由此，所有 learners 均面对相同的 ADHD-relevant instructional challenge，而每个 Study 3 condition 均可与其 Study 2 distracted baseline 进行 matched comparison，用于检验 outcome displacement、ordering preservation 和 PDB-sensitivity change。两种 Prompt-ADHD learners 和三种 CPB learners 分别与 A1、A2、B1、B2 交叉，形成 20 个 learner-type × attribute-profile conditions。每个 condition 独立运行五次：

\[
20\text{ conditions}
\times
5\text{ runs}
=
100\text{ simulated-learner runs}.
\]

每个 run 覆盖七篇 teaching materials，并回答全部 49 道冻结 assessment questions，因此共生成：

\[
100\text{ runs}
\times
49\text{ questions}
=
4{,}900\text{ assessment answers}.
\]

除固定使用 distracted materials 并加入 Language Ability 与 Big-Five dimensions 外，Study 3 的 Teaching Round exposure、student model、generation settings、49 道 questions、五次重复及 Qwen3.7-Max criterion-level scoring procedure 均与 Study 2 相同。Prompt learners 继续基于完整的 round-wise conversation history 回答；CPB learners 继续基于其 Explicit LTM 回答。因而，Study 3 的主要新增变量仅为 attribute profile 及其在两种 representations 中的放置方式。

Study 2 与 Study 3 因而形成递进而非重复的比较关系。如 Table 3.Z 所示，Study 2 通过 learner condition 与 material condition 的交叉建立 baseline；Study 3 则固定 distracted materials，并检验 A1–B2 attribute profiles 加入后，outcomes、matched learner-condition ordering 与 PDB sensitivity 相对于该 baseline 的变化。

**Table 3.Z. Analytical relationship between Study 2 and Study 3**

| Study             | Row axis                  | Column axis        | Main question                                                |
| ----------------- | ------------------------- | ------------------ | ------------------------------------------------------------ |
| **Study 2 / RQ2** | Learner condition         | Clean / Distracted | learner representation 是否对 distraction / demand 有系统响应 |
| **Study 3 / RQ3** | Matched learner condition | Language × BF: A1 / A2 / B1 / B2 | 加入 heterogeneous attributes 后，outcomes、matched ordering 与 PDB sensitivity 相对于 matched baseline 改变多少 |

##### 3.5.4.3 Evaluation Measures

Study 3 复用 Study 2 的 question-level aggregation order、Checklist Score、sample SD、response word count、OCR 和 processing-demand measures，以保证 Study 3 profiles 能够与 matched Study 2 distracted baselines 直接比较。对于问题 \(q\)、learner condition \(c\)、profile \(p\) 和第 \(j\) 次运行，记 Checklist Score 为 \(S_{q,c,p,j}\)，回答词数为 \(W_{q,c,p,j}\)。每个 condition 均运行五次，因此题目级平均得分、sample SD 和平均回答词数分别为：

\[
\bar S_{q,c,p}
=
\frac{1}{5}\sum_{j=1}^{5}S_{q,c,p,j},
\]

\[
SD_{q,c,p}
=
\sqrt{
\frac{
\sum_{j=1}^{5}
\left(S_{q,c,p,j}-\bar S_{q,c,p}\right)^2
}{5-1}
},
\]

\[
\bar W_{q,c,p}
=
\frac{1}{5}\sum_{j=1}^{5}W_{q,c,p,j}.
\]

所有更高层级的 summaries 均先在 question level 计算上述 quantities，再对相同问题集合进行等权汇总。主要分析使用全部 49 道题，并分别报告 42 道 Independent Questions 与 7 道 Integrative Questions；SQ3 的 continuous PDB analysis 仅使用能够唯一映射到一个 source Teaching Round 的 42 道 Independent Questions。

---

**SQ1 — Baseline-relative outcome displacement**

SQ1 分别量化 Mean Checklist Score、平均 question-level run SD 和 Mean Response Word Count 相对于 matched Study 2 distracted baseline 的变化。对于任一 outcome \(X\in\{\mu,\overline{SD},\overline W\}\)，令 \(X^{(2)}_c\) 表示 learner condition \(c\) 的 Study 2 baseline，\(X^{(3)}_{c,p}\) 表示同一 learner condition 在 Study 3 profile \(p\) 下的结果，则统一定义：

\[
\Delta X_{c,p}
=
X^{(3)}_{c,p}-X^{(2)}_c,
\]

\[
R_{X,c,p}
=
\frac{X^{(3)}_{c,p}-X^{(2)}_c}{X^{(2)}_c}
\times100\%.
\]

其中，overall Mean Checklist Score 定义为：

\[
\mu_{c,p}
=
\frac{1}{Q}
\sum_{q=1}^{Q}\bar S_{q,c,p},
\]

平均 question-level run SD 定义为：

\[
\overline{SD}_{c,p}
=
\frac{1}{Q}
\sum_{q=1}^{Q}SD_{q,c,p},
\]

Mean Response Word Count 定义为：

\[
\overline W_{c,p}
=
\frac{1}{Q}
\sum_{q=1}^{Q}\bar W_{q,c,p}.
\]

因此，SQ1 正式报告 \(\Delta\mu\) 与 \(R_{\mu}\)、\(\Delta\overline{SD}\) 与 \(R_{SD}\)，以及 \(\Delta\overline W\) 与 \(R_W\)。正向 delta 表示 Study 3 profile condition 高于其 matched baseline，负向 delta 表示低于 baseline。Mean Checklist Score displacement 是主要 performance outcome；SD displacement 表示重复运行稳定性的改变；word-count displacement 仅描述回答长度变化，不被解释为 knowledge gain、learning effectiveness 或 attribute fidelity。当 baseline quantity 等于零时，相对偏移率不可估计，并标记为 not estimable；不使用任意平滑常数替代零分母。

---

**SQ2 — Matched-OCR preservation**

SQ2 检验 Study 2 中 matched learner conditions 的 question-level ordering 是否在 A1–B2 profiles 下保持。由于 Study 3 不包含 Prompt-NT 与 CPB Zero，Study 2 baseline 必须使用相同 learner subsets 从 distracted arm 重新计算，而不能直接使用 Study 2 的完整三等级 Prompt OCR 或四等级 CPB OCR。

对于 Prompt branch，matched Study 2 baseline 与 Study 3 profile-specific OCR 分别定义为：

\[
OCR^{\mathrm{Prompt}}_0
=
\frac{
\#\left\{q:\bar S^{(2)}_{q,\mathrm{Moderate}}
\geq
\bar S^{(2)}_{q,\mathrm{High}}\right\}
}{Q},
\]

\[
OCR^{\mathrm{Prompt}}_p
=
\frac{
\#\left\{q:\bar S^{(3)}_{q,\mathrm{Moderate},p}
\geq
\bar S^{(3)}_{q,\mathrm{High},p}\right\}
}{Q}.
\]

对于 CPB branch：

\[
OCR^{\mathrm{CPB}}_0
=
\frac{
\#\left\{q:\bar S^{(2)}_{q,\mathrm{Low}}
\geq
\bar S^{(2)}_{q,\mathrm{Medium}}
\geq
\bar S^{(2)}_{q,\mathrm{High}}\right\}
}{Q},
\]

\[
OCR^{\mathrm{CPB}}_p
=
\frac{
\#\left\{q:\bar S^{(3)}_{q,\mathrm{Low},p}
\geq
\bar S^{(3)}_{q,\mathrm{Medium},p}
\geq
\bar S^{(3)}_{q,\mathrm{High},p}\right\}
}{Q}.
\]

两种 branches 均使用 non-strict ordering，因此得分相等表示没有违反预期方向。Profile-specific OCR change 以百分点报告：

\[
\Delta OCR_{p,\mathrm{pp}}
=
100\left(OCR_p-OCR_0\right).
\]

为判断较高 OCR 是否主要由 ties 造成，SQ2 单独报告 tie rate。Prompt branch 的 baseline 与 profile-specific tie rates 定义为：

\[
P^{\mathrm{Prompt}}_{\mathrm{tie},0}
=
\frac{
\#\left\{q:\bar S^{(2)}_{q,\mathrm{Moderate}}
=
\bar S^{(2)}_{q,\mathrm{High}}\right\}
}{Q},
\]

\[
P^{\mathrm{Prompt}}_{\mathrm{tie},p}
=
\frac{
\#\left\{q:\bar S^{(3)}_{q,\mathrm{Moderate},p}
=
\bar S^{(3)}_{q,\mathrm{High},p}\right\}
}{Q}.
\]

CPB branch 的 tie 要求该题仍满足整体非递增排序，但至少一组相邻 conditions 得分相等：

\[
P^{\mathrm{CPB}}_{\mathrm{tie},p}
=
\frac{1}{Q}
\sum_{q=1}^{Q}
\mathbf 1\!\left[
\begin{aligned}
&\bar S_{q,\mathrm{Low},p}
\geq\bar S_{q,\mathrm{Medium},p}
\geq\bar S_{q,\mathrm{High},p}\\
&\land\left(
\bar S_{q,\mathrm{Low},p}=\bar S_{q,\mathrm{Medium},p}
\;\lor\;
\bar S_{q,\mathrm{Medium},p}=\bar S_{q,\mathrm{High},p}
\right)
\end{aligned}
\right],
\]

其中，Study 2 baseline 的 \(P^{\mathrm{CPB}}_{\mathrm{tie},0}\) 使用相同定义，但将 profile-specific scores 替换为 Study 2 distracted-arm scores。两种 branches 的 tie-rate change 均以百分点表示：

\[
\Delta P_{\mathrm{tie},p,\mathrm{pp}}
=
100\left(P_{\mathrm{tie},p}-P_{\mathrm{tie},0}\right).
\]

相应的 ordering composition 为：

\[
P_{\mathrm{strict},p}=OCR_p-P_{\mathrm{tie},p},
\qquad
P_{\mathrm{reverse},p}=1-OCR_p.
\]

因此，SQ2 的主要指标是 \(OCR_p\)、\(P_{\mathrm{tie},p}\)、\(\Delta OCR_p\) 和 \(\Delta P_{\mathrm{tie},p}\)；strict 与 reverse proportions 由前两项推导，用于解释 ordering 的组成。Prompt 与 CPB 的 ordering constraints 数量不同，因此不依据两者原始 OCR 的绝对高低直接判断哪一种 representation 更稳健，而主要比较各自相对于 matched baseline 的变化。浮点相等使用固定的 numerical tolerance 判断，以确保每道题只被归入 strict、tie 或 reverse 中的一类。

---

**SQ3 — Processing-demand sensitivity preservation**

SQ3 检验加入 A1–B2 profiles 后，performance 与 source-round PDB 之间的关系相对于 matched Study 2 distracted baseline 改变了多少。该分析仅使用 42 道 Independent Questions，因为每道题均能够映射到唯一的 source Teaching Round；7 道 Integrative Questions 涉及多个 rounds，不具有唯一的 single-round PDB。

对于每个 learner condition \(c\)，Study 2 baseline 拟合：

\[
\bar S^{(2)}_{q,c}
=
\alpha^{(2)}_c
+
\beta^{(2)}_{c,\mathrm{PDB},100}
\left(\frac{PDB_q}{100}\right)
+
\varepsilon_q,
\]

而 Study 3 中每个 profile \(p\) 拟合：

\[
\bar S^{(3)}_{q,c,p}
=
\alpha^{(3)}_{c,p}
+
\beta^{(3)}_{c,p,\mathrm{PDB},100}
\left(\frac{PDB_q}{100}\right)
+
\varepsilon_q.
\]

其中，\(\beta_{\mathrm{PDB},100}\) 表示 source-round PDB 每增加 100 bits 时 Mean Checklist Score 的估计变化。SQ3 的主要指标为 slope displacement：

\[
\Delta\beta_{c,p}
=
\beta^{(3)}_{c,p,\mathrm{PDB},100}
-
\beta^{(2)}_{c,\mathrm{PDB},100}.
\]

\(\Delta\beta\approx0\) 表示新增 profile 后 PDB–score linear relationship 接近 matched baseline；正值表示 slope 向更正方向移动，负值表示 slope 变得更负。由于该符号只描述关系变化方向，robustness 主要根据 \(|\Delta\beta|\) 的大小及其跨 A1–B2 profiles 的一致性判断。

作为不依赖线性假设的 supporting measures，SQ3 同时计算 PDB 与 question-level Mean Checklist Score 的 Spearman rank correlation \(\rho\)，以及预定义 Low- 与 High-demand Independent Questions 的 performance gap：

\[
G_{c,p}
=
\bar S_{\mathrm{Low\ demand},c,p}
-
\bar S_{\mathrm{High\ demand},c,p}.
\]

并分别计算：

\[
\Delta\rho_{c,p}=\rho^{(3)}_{c,p}-\rho^{(2)}_c,
\qquad
\Delta G_{c,p}=G^{(3)}_{c,p}-G^{(2)}_c.
\]

PDB–score slope displacement 是 SQ3 的主要证据；\(\Delta\rho\) 与 \(\Delta G\) 用于检查结论是否依赖线性拟合或单一 summary。SQ3 评估的是 WM/PDB-related behavioural sensitivity 的保持程度，不把 PDB slope 解释为 Working-Memory mechanism 本身的直接测量。

Table 3.W 总结了 Study 3 的三个 Subquestions 与主要指标。

**Table 3.W. Evaluation framework for Study 3**

| Subquestion | Core comparison | Primary measures | Supporting evidence |
|---|---|---|---|
| **SQ1 — Baseline-relative outcome displacement** | Study 3 profile vs matched Study 2 distracted baseline | \(\Delta\mu\), \(R_\mu\), \(\Delta\overline{SD}\), \(R_{SD}\) | \(\Delta\overline W\), \(R_W\); Independent/Integrative summaries |
| **SQ2 — Matched-OCR preservation** | Matched Study 2 OCR vs A1–B2 profile OCR | \(OCR_p\), \(\Delta OCR_p\), \(P_{\mathrm{tie},p}\), \(\Delta P_{\mathrm{tie},p}\) | Strict/tie/reverse composition; Independent/Integrative summaries |
| **SQ3 — Processing-demand sensitivity preservation** | Matched Study 2 PDB relationship vs A1–B2 profile relationship | \(\Delta\beta_{\mathrm{PDB},100}\) | \(\Delta\rho\), \(\Delta G_{\mathrm{Low-High}}\) |

##### 3.5.4.4 Expected Patterns and Interpretation

Study 3 按照 SQ1–SQ3 的递进结构检验新增 multidimensional learner-profile prompts 后，outcomes、learner-condition ordering 与 processing-demand sensitivity 相对于 matched Study 2 distracted baselines 的保持程度。所有 expectations 均针对 aggregate-level patterns；除 OCR 明确在 question level 分类外，不要求每一道 question、每一篇 lesson 或每一次 run 都严格满足相同关系。Study 3 也不预设加入额外 attributes 后 final score 必须保持不变。

| Subquestion | Prespecified aggregate-level expectation |
|---|---|
| **SQ1 — Baseline-relative outcome displacement** | 若 representation 对新增 profile prompts 较稳健，则 A1–B2 下的 \(|\Delta\mu|\) 与 \(|\Delta\overline{SD}|\) 应整体较小，并且不由单一 profile 驱动。\(\Delta\overline W\) 用于识别回答长度变化，但不作为 learning-performance robustness 的直接证据。 |
| **SQ2 — Matched-OCR preservation** | 若 Study 2 中的 matched learner-condition ordering 得到保持，则各 profile 的 \(\Delta OCR\) 与 \(\Delta P_{\mathrm{tie}}\) 应接近零，且 reverse proportion 不应系统增加。OCR 必须结合 tie composition 解释，避免把大量同分误判为严格顺序保持。 |
| **SQ3 — Processing-demand sensitivity preservation** | 若既有 PDB–performance relationship 对新增 profile prompts 较稳健，则 \(|\Delta\beta_{\mathrm{PDB},100}|\) 应较小，并由方向一致的 \(\Delta\rho\) 与 \(\Delta G_{\mathrm{Low-High}}\) 提供支持。更大的 slope displacement 表示新增 profiles 改变了原有 demand sensitivity。 |

SQ1 中，\(\Delta\mu\) 与 \(\Delta\overline{SD}\) 分别描述平均 performance 和重复运行 variability 的绝对改变，相对偏移率用于补充不同 baseline scales 下的变化比例。回答词数可能直接受到 Language Ability prompt 的影响，因此 \(\Delta\overline W\) 只用于描述 response-form displacement。SQ2 中，Prompt 和 CPB 具有不同数量的 ordering constraints，故不直接比较两者的原始 OCR；核心比较是各自相对于 matched baseline 的 \(\Delta OCR\) 及 strict/tie/reverse composition。SQ3 中，PDB slope、rank association 和 Low–High gap 均基于同一组 42 道 Independent Questions，以避免 Integrative Questions 的 multi-round source structure 造成不明确的 PDB mapping。

Aligned 与 conflicting profiles 不被预设为简单的“有利”或“不利” learner types，也不作为额外的独立 statistical factor。A1、A2、B1 和 B2 均作为完整的 profile-prompt additions 分别与 matched baseline 比较；观察到的偏移不被进一步解释为 Language Ability、Big-Five traits 或二者 interaction 的独立因果效应。

RQ3 的整体判断将综合三个层面的 baseline-relative evidence：outcome displacement、matched-ordering preservation 和 PDB-sensitivity displacement。如果 CPB 在 A1–B2 profiles 下相对于 Prompt 表现出更小且更一致的 absolute displacement，同时较好保持其 matched OCR 与 PDB–performance relationship，则支持 factorised CPB 在新增 profile prompts 下具有更强的 multidimensional representational robustness；若这些证据不一致，则分别报告各层结果，而不依据单一平均分得出总体结论。上述结论仅涉及 **robustness under the addition of Language Ability and Big-Five profile prompts**，不证明这些 traits 得到了准确模拟。


### 3.6 Implementation, Reproducibility and Ethical Scope

#### 3.6.1 Models and Generation Settings

#### 3.6.2 Experiment Execution and Reproducibility

#### 3.6.3 Statistical Uncertainty and Repetition Conventions

#### 3.6.4 Ethical Scope and Interpretation

## 4  Results

### 4.1 Results Overview

### 4.2 RQ1 — Cognitive-Mechanism Effects

#### 4.2.1 RQ1 Results Overview

Study 1 对应 RQ1，旨在检验 CPB 是否能够按照预定义的 processing logic 产生正确、可归因且可追踪的信息状态变化。具体而言，本研究关注三个递进问题：首先，Attention 和 Working-Memory mechanisms 是否按照注册规则正确执行；其次，这些 mechanisms 是否在其预期的信息转换阶段产生可定位的变化；最后，这些局部变化是否能够沿完整 processing chain 传播至 Explicit LTM，并进一步反映在 downstream question performance 中。

因此，本节按照 SQ1–SQ3 的顺序报告 Study 1 结果。Section 4.2.2 首先报告 mechanism execution fidelity；Section 4.2.3 随后检验 \(S_r \rightarrow P_{r,c} \rightarrow A_{r,c} \rightarrow L_{r,c}\) 各阶段的信息状态变化；Section 4.2.4 最后考察这些 upstream differences 是否形成累计的信息损失，并进一步传播至 Explicit LTM 和最终 assessment performance。Section 4.2.5 在上述三层证据基础上总结 RQ1 的整体结论。

#### 4.2.2 SQ1 — Mechanism Execution Fidelity

SQ1 用于检验 Attention 和 Working-Memory mechanisms 是否严格按照预先注册的规则执行。为此，本研究使用四个 implementation-fidelity measures。Attention Target-Removal Fidelity (ATRF) 检查应被 Attention 移除的 target sentences 是否被正确删除；Non-Target Preservation Rate (NTPR) 检查不应被 Attention 影响的 instructional information 是否被正确保留。Working-Memory Trigger Agreement (WMTA) 检查实际 WM trigger 是否与冻结的 processing-demand–capacity rule 一致；FIFO Rule Fidelity (FRF) 则检查 WM 在触发后是否按照预定义的 within-round FIFO-style rule 移除了 Attention 后最早仍然可用的 instructional sentence。四个指标越接近 1，表示实际执行与注册机制规则的一致性越高。

**Table 4.X. Mechanism execution fidelity across Study 1 conditions**

| Condition |  ATRF |  NTPR |  WMTA |   FRF | Violations |
| --------- | ----: | ----: | ----: | ----: | ---------: |
| **A0W0**  |   N/A | 1.000 | 1.000 |   N/A |          0 |
| **A1W0**  | 1.000 | 1.000 | 1.000 |   N/A |          0 |
| **A0W1**  |   N/A | 1.000 | 1.000 | 1.000 |          0 |
| **A1W1**  | 1.000 | 1.000 | 1.000 | 1.000 |          0 |

Attention mechanism 的执行结果与冻结规则完全一致。在两个 Attention ON 条件（A1W0 和 A1W1）中，42 个 eligible distractor-linked target sentences 均被正确识别并移除，因此 ATRF 均为 1.000。与此同时，四个条件下所有 non-target instructional information 均被正确保留，NTPR 均为 1.000。在 Attention OFF 条件（A0W0 和 A0W1）中，没有发生任何 Attention-attributed target removal。这说明 Attention Filter 不仅在应触发时正确移除了目标信息，也没有对非目标内容产生误删。

Working-Memory mechanism 同样表现出完全一致的执行结果。四个条件中的实际 WM trigger status 均与冻结的 \(D(R_r)>C^{WM}_c\) 判断规则一致，因此 WMTA 均为 1.000。在两个 WM ON 条件（A0W1 和 A1W1）中，共有 32 个 Teaching Rounds 超过注册的 capacity threshold，并触发 WM restriction；在所有这些 eligible overflow events 中，系统均正确移除了 Attention 后最早仍然可用的 instructional sentence，因此 FRF 均为 1.000。相反，在 WM OFF 条件（A0W0 和 A1W0）中，没有发生任何由 capacity constraint 导致的 sentence removal。

总体而言，四个 Study 1 conditions 中未观察到任何 implementation violation。Attention 的 trigger、target localisation 和 non-target preservation，以及 WM 的 threshold triggering 和 FIFO-style removal 均达到 100% fidelity。该结果直接回答了 SQ1：CPB 中两个被操纵的 mechanisms 均按照注册设计执行，因此后续观察到的信息状态差异可以建立在正确的 mechanism execution 基础上进行解释，不会出现程序错误或非预期的信息选择。

#### 4.2.3 SQ2 — Stage-Specific Information-State Transitions

在 SQ1 已确认两个 mechanisms 均按照预先设定的规则正确执行后，SQ2 进一步检验由此产生的信息变化是否被定位在预期的 processing stage。对应于

\[
S_r
\xrightarrow{\mathrm{Attention}}
P_{r,c}
\xrightarrow{\mathrm{WM}}
A_{r,c}
\xrightarrow{\mathrm{Encoding}}
L_{r,c},
\]

本研究使用三个 stage-specific measures。Attention-stage Availability Ratio (AAR) 表示原始 Source words 在 Attention 后仍保留于 Post-Attention Input 的比例；Working-Memory-stage Availability Ratio (WMAR) 表示 Post-Attention Input words 在 WM processing 后仍能够进入 Encoder 的比例。两个指标越接近 1，分别表示对应 stage 造成的信息限制越少。Encoding Semantic Recall (ESR) 则使用冻结配置下的 BERTScore Recall，衡量非空 Available Input 与同轮 Explicit LTM 之间的 semantic correspondence。ESR 越高，表示生成的 LTM 对实际到达 Encoder 的输入具有越强的条件性语义覆盖，但该指标不是完整 Source 的知识保持比例。

Table 4.X 报告七篇 teaching materials 上的非加权均值及 95% lesson-bootstrap confidence intervals。Figure 4.X 进一步展示每篇 teaching material 的观测值、condition mean 和对应 confidence interval。

**Table 4.X. Stage-specific information-state measures across Study 1 conditions**

| Condition | AAR, Mean [95% CI] | WMAR, Mean [95% CI] | ESR, Mean [95% CI] |
| --------- | ------------------: | -------------------: | -----------------: |
| **A0W0**  | 1.000 [1.000, 1.000] | 1.000 [1.000, 1.000] | 0.798 [0.772, 0.818] |
| **A1W0**  | 0.768 [0.749, 0.784] | 1.000 [1.000, 1.000] | 0.817 [0.797, 0.837] |
| **A0W1**  | 1.000 [1.000, 1.000] | 0.806 [0.754, 0.857] | 0.812 [0.776, 0.843] |
| **A1W1**  | 0.768 [0.750, 0.784] | 0.783 [0.699, 0.853] | 0.831 [0.806, 0.851] |

/Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Figure_4_Study1_Stage_Specific_Transitions.pdf

![image-20260826143859655](/Users/willow/Library/Application Support/typora-user-images/image-20260826143859655.png)

**Figure 4.X. Stage-specific information-state transitions across the four Study 1 mechanism conditions.** Points represent individual teaching materials, diamonds represent unweighted means across the seven materials, and vertical intervals represent 95% lesson-bootstrap confidence intervals. Panel A reports Attention-stage Availability Ratio, Panel B reports Working-Memory-stage Availability Ratio, and Panel C reports Encoding Semantic Recall.

Attention stage 呈现出预期的 localisation pattern。在两个 Attention OFF 条件（A0W0 和 A0W1）中，AAR 均为 1.000，说明没有 Source information 在 Attention stage 变得 unavailable。启用 Attention 后，A1W0 和 A1W1 的平均 AAR 均下降至 0.768。进一步地，在保持 Attention setting 不变的情况下切换 WM setting，lesson-level AAR 没有发生变化。这表明 Attention-attributed information loss 被定位在 \(S_r \rightarrow P_{r,c}\) 转换，并且不受 downstream WM setting 影响。

Working-Memory stage 同样表现出清晰的阶段定位。在两个 WM OFF 条件（A0W0 和 A1W0）中，WMAR 均保持为 1.000，说明关闭 capacity constraint 时，Attention 后没有发生额外的信息限制。在 WM ON 条件中，A0W1 的平均 WMAR 为 0.806，A1W1 为 0.783，说明额外的信息损失仅在 WM capacity constraint 启用时出现，并被定位在 \(P_{r,c}\rightarrow A_{r,c}\) 转换。A0W1 与 A1W1 的 WMAR 不要求完全一致，因为 Attention manipulation 已经改变了 WM 实际接收到的 remaining instructional information。

在共享的 Encoding stage 中，四个条件的平均 ESR 介于 0.798–0.831，处于相近范围，且 lesson-bootstrap confidence intervals 大量重叠。因此，未观察到明显的 condition-specific Encoding divergence。A1W1 的 descriptive ESR 最高，但由于 ESR 的 reference 是 condition-specific Available Input，而不是完整 Source，这一较高值不能被解释为其对原始教学材料具有更优的总体知识保持。

综合来看，SQ2 的结果表明，每个 manipulated mechanism 均在其预期位置改变了 information availability：Attention-related loss 被定位于 \(S_r\rightarrow P_{r,c}\)，WM-related loss 随后发生于 \(P_{r,c}\rightarrow A_{r,c}\)，而 shared Encoding 对实际到达该阶段的信息保持了相近的 semantic correspondence。因此，SQ2 在 computational stage-specific traceability 层面得到支持。更广泛的认知理论含义将在 Chapter 5 中讨论。

#### 4.2.4 SQ3 — Cumulative and Downstream Propagation

在 SQ2 已确认 Attention、WM 和 shared Encoding 的局部 information-state transitions 可被分别定位后，SQ3 进一步检验这些变化是否沿完整 processing chain 累计传播。该分析依次考察三个结果层级：从完整 Source 到 Available Input 的累计 information availability、从完整 Source 到 Explicit LTM 的端到端 semantic correspondence，以及从学习阶段到最终 assessment answer 的 downstream performance。

Source-Word Availability Ratio (SWAR) 表示原始 Source words 在依次经过 Attention 和 WM 后最终能够进入 Encoder 的比例。在相同的 lesson-level aggregation 下，SWAR 满足

\[
SWAR_{l,c}=AAR_{l,c}\times WMAR_{l,c}.
\]

因此，SWAR 越低，表示两个 upstream mechanisms 造成的累计 information restriction 越强。End-to-End Semantic Recall (E2ESR) 使用完整 Source 作为 reference、同轮 Explicit LTM 作为 candidate 计算 BERTScore Recall，用于描述 Source 与最终知识状态之间的 semantic correspondence。E2ESR 越高，表示最终 LTM 与完整教学来源之间的语义对应越强，但该指标不是人类知识保持百分比。最后，Checklist Score 将每道题中被 Judge 标记为 `Correct` 的 frozen criteria 比例换算到 0–10 分，用于衡量完整 learning pipeline 对最终回答的 downstream consequence。

Table 4.Y 报告七篇 teaching materials 上的非加权均值及 95% lesson-bootstrap confidence intervals。Figure 4.Z 以相同的 lesson-level观测单位展示四个 conditions 下的 SWAR、E2ESR 和 Checklist Score。

**Table 4.Y. Cumulative information-state and downstream outcomes across Study 1 conditions**

| Condition | SWAR, Mean [95% CI] | E2ESR, Mean [95% CI] | Checklist Score, Mean [95% CI] |
| --------- | -------------------: | --------------------: | -----------------------------: |
| **A0W0**  | 1.000 [1.000, 1.000] | 0.798 [0.771, 0.818] | 9.286 [8.810, 9.694] |
| **A1W0**  | 0.768 [0.750, 0.784] | 0.638 [0.623, 0.652] | 2.891 [1.565, 4.082] |
| **A0W1**  | 0.806 [0.754, 0.859] | 0.679 [0.653, 0.708] | 7.143 [6.327, 7.959] |
| **A1W1**  | 0.601 [0.534, 0.660] | 0.522 [0.483, 0.558] | 2.415 [0.952, 3.844] |

<!-- Insert Figure 4.Z here: Figures/Chapter4/Figure_4_Study1_Cumulative_Downstream_Outcomes.png -->

![image-20260826163346730](/Users/willow/Library/Application Support/typora-user-images/image-20260826163346730.png)

**Figure 4.Z. Cumulative and downstream outcomes across the four Study 1 mechanism conditions.** Points represent individual teaching materials, diamonds represent unweighted means across the seven materials, and vertical intervals represent 95% lesson-bootstrap confidence intervals. Panel A reports Source-Word Availability Ratio, Panel B reports End-to-End Semantic Recall, and Panel C reports Checklist Score.

/Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Figure_4_Study1_Cumulative_Downstream_Outcomes.png

SWAR 呈现出逐步累计的信息限制。A0W0 的平均 SWAR 为 1.000，说明在两个 mechanisms 均关闭时，完整 Source 均到达 Encoder。单独启用 Attention 后，A1W0 的 SWAR 降至 0.768；单独启用 WM 后，A0W1 的 SWAR 降至 0.806；两个 mechanisms 同时启用时，A1W1 的 SWAR 进一步降至 0.601。对每篇 lesson 的数值检验表明，\(SWAR=AAR\times WMAR\) 的最大计算差异为 \(1.11\times10^{-16}\)，即在数值精度范围内完全成立。该结果表明，SQ2 中分别定位的 Attention 和 WM transitions 能够按照预定义的处理顺序累计传播至最终 Available Input。

Figure 4.Y 从绝对词数角度呈现了同一累计过程。四个条件均从相同的 3,719 个 frozen Source words 开始。A0W0 的 3,719 词全部进入 Encoder；A1W0 在 Attention stage 移除 868 词并保留 2,851 词；A0W1 在 WM stage 移除 717 词并保留 3,002 词；A1W1 先由 Attention 移除 868 词，再由 WM 移除 603 词，最终保留 2,248 词。所有条件均严格满足

\[
W_{\mathrm{source},c}
=
W_{\mathrm{available},c}
+W_{\mathrm{attention-loss},c}
+W_{\mathrm{WM-loss},c}.
\]

Figure 4.Y 使用全语料 pooled counts，而 Table 4.Y 中的 SWAR 是七篇教材 lesson-level ratios 的非加权平均，因此 A1W1 的 pooled available-word proportion 为 60.4%，与平均 SWAR 0.601 存在轻微的 aggregation-level difference。



![image-20260826163409153](/Users/willow/Library/Application Support/typora-user-images/image-20260826163409153.png)

**Figure 4.Y. Absolute decomposition of frozen Source words across Study 1 mechanism conditions.** Each stacked bar represents the same 3,719 Source words and partitions them into words remaining in Available Input, words removed at the Attention stage, and words subsequently removed by the Working-Memory constraint. Labels report both absolute word counts and their proportions of the complete frozen Source.

/Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Figure_4_Study1_Absolute_Source_Word_Decomposition.png

累计的信息限制进一步反映在 Explicit LTM 与完整 Source 的语义对应上。A0W0 的平均 E2ESR 为 0.798，A1W0 和 A0W1 分别下降至 0.638 和 0.679，A1W1 最低，为 0.522。该模式与 upstream source availability 的减少方向一致。结合 SQ2 中 ESR 在不同条件下保持相近范围的结果，这表明条件间 Source-to-LTM 差异主要伴随进入 Encoder 的信息量变化，而不是明显的 condition-specific Encoding divergence。

相同方向的变化也出现在 downstream assessment performance。A0W0 的平均 Checklist Score 为 9.286，A0W1 为 7.143，A1W0 为 2.891，A1W1 为 2.415。从描述性幅度看，Attention-related decrement 大于 WM-related decrement，而两个 mechanisms 同时启用时 A1W1 的平均得分最低。Checklist Score 在此仅作为 downstream supporting evidence，用于检验 upstream information restriction 是否进一步反映在最终回答表现中。

**Table 4.Z. Factorial contrasts for cumulative and downstream Study 1 outcomes**

| Effect                    | SWAR, Estimate [95% CI] | E2ESR, Estimate [95% CI] | Checklist Score, Estimate [95% CI] |
| ------------------------- | ----------------------: | -----------------------: | ---------------------------------: |
| **Attention**             | −0.219 [−0.230, −0.207] |  −0.159 [−0.180, −0.140] |            −5.561 [−6.599, −4.609] |
| **WM**                    | −0.180 [−0.238, −0.130] |  −0.118 [−0.153, −0.084] |            −1.310 [−1.718, −0.816] |
| **Attention × WM**        | +0.028 [+0.001, +0.057] |  +0.004 [−0.012, +0.019] |            +1.667 [+0.986, +2.313] |
| **Joint ON − double OFF** | −0.399 [−0.466, −0.339] |  −0.276 [−0.327, −0.227] |            −6.871 [−7.959, −5.782] |

为量化两个 manipulations 的总体作用，Table 4.Z 报告了 SWAR、E2ESR 和 Checklist Score 的 \(2\times2\) factorial contrasts。Attention 和 WM 的边际 effects 在三个 outcomes 上均为负值，A1W1 相对于 A0W0 的 joint contrast 也均为负值。SWAR 和 Checklist Score 的 interaction estimates 为正，且 intervals 未跨越 0；E2ESR interaction 接近 0，且 interval 跨越 0。这里的正向 interaction 并不表示同时启用两种 constraints 改善了信息保持或回答表现，而仅表示联合下降幅度小于两个单独效应在线性相加假设下的预期。

综合来看，SQ3 得到支持：在 SQ2 中被定位于各自 processing stage 的 Attention 和 WM effects 能够累计改变进入 Encoder 的 Source information，并进一步反映在 Explicit LTM 与完整 Source 的语义对应以及最终 Checklist Score 中。由此，Study 1 建立了从局部 information-state transitions 到 downstream outcomes 的可追踪链条。


#### 4.2.5 RQ1 Summary

Section 4.2.1 将 RQ1 分解为三个递进要求：Attention 和 Working-Memory mechanisms 是否按照注册规则正确执行；由此产生的信息变化是否被定位在预期的 processing stage；以及这些局部变化是否能够沿完整 processing chain 传播至 Explicit LTM 和 downstream question performance。SQ1–SQ3 的结果分别为这三个要求提供了对应证据，汇总见 Table 4.W。

**Table 4.W. Summary of evidence for RQ1**

| Subquestion | Primary Evidence | Key Result | Interpretation |
|---|---|---|---|
| **SQ1 — Mechanism execution** | ATRF, NTPR, WMTA, FRF | All applicable fidelity measures = 1.000; no implementation violations | Attention and WM executed the registered rules correctly |
| **SQ2 — Stage-specific transitions** | AAR, WMAR, ESR | Attention-related loss localised to \(S_r \rightarrow P_{r,c}\); WM-related loss localised to \(P_{r,c} \rightarrow A_{r,c}\); ESR = 0.798–0.831 | Manipulation effects were localised to the intended stages, with no clear condition-specific Encoding divergence |
| **SQ3 — Cumulative propagation** | SWAR, E2ESR, Checklist Score | From A0W0 to A1W1, SWAR decreased from 1.000 to 0.601, E2ESR from 0.798 to 0.522, and Checklist Score from 9.286 to 2.415 | Local information-state changes propagated to Available Input, Explicit LTM, and downstream answers |

首先，SQ1 确认了后续分析所依赖的 implementation foundation。所有 applicable fidelity measures 均为 1.000，且四个 conditions 中未观察到 mechanism violation。这表明 Attention 和 WM 的 trigger、target selection 和 removal rules 均按照冻结设计执行，因此后续 condition differences 不需要由 implementation error 来解释。

其次，SQ2 表明两个 manipulated mechanisms 的影响能够被定位到其预期的信息转换阶段。Attention-related information loss 仅出现在 \(S_r \rightarrow P_{r,c}\)，而额外的 WM-related restriction 仅出现在 \(P_{r,c} \rightarrow A_{r,c}\)。Shared Encoder 的 ESR 在四个 conditions 中保持在相近范围，因此未观察到明显的 condition-specific Encoding divergence。由此，Study 1 不仅产生了不同的信息状态，还能够指出这些差异首先发生在哪一个 processing transition。

最后，SQ3 表明这些局部变化能够继续向下游传播。A1W1 相对于 A0W0 的 joint contrasts 在 SWAR、E2ESR 和 Checklist Score 上分别为 \(-0.399\)、\(-0.276\) 和 \(-6.871\)，说明 cumulative upstream restriction 同时反映在进入 Encoder 的 Source information、最终 Explicit LTM 与完整 Source 的 semantic correspondence，以及 downstream assessment performance 中。Checklist Score 在此仍作为 supporting behavioural evidence，而不替代机制执行与阶段定位证据。

据此，RQ1 可以得到肯定回答：**在冻结的实验材料、参数和操作化规则范围内，CPB processing pipeline 按照预定义逻辑执行，并产生了与各机制设计一致、可归因且可沿 Source、Attention、WM、Encoding、Explicit LTM 和 Answer stages 追踪的信息状态变化。** 这一结果支持 CPB 实现层面的 computational mechanistic validity 和 process traceability，而不构成其与真实 ADHD cognitive processes 生物学等效的证据。在这一机制基础得到确认后，Section 4.3 将进一步比较 CPB 与 persona prompting 是否在受控学习条件下产生不同的 behavioural patterns。

### 4.3 RQ2 — CPB versus Persona-Prompted ADHD Simulation

#### 4.3.1 RQ2 Results Overview

Study 2 对应 RQ2，比较 persona prompting 与 CPB 是否会在受控 distraction 和 instructional processing demand 下产生不同的 behavioural sensitivity。分析包含七个 learner conditions：Prompt-NT、Moderate-Intensity Prompt-ADHD、High-Intensity Prompt-ADHD，以及 CPB Zero、Low、Medium 和 High。每个 learner condition 均在 clean 与 distracted materials 下独立运行五次，形成 \(7\times2\times5=70\) 个 learner–material runs。每次运行回答七篇教材的全部 49 道题，因此最终分析包含 3,430 份 answers and Judge scores。对每个 learner condition、material condition 和 question，本研究首先在五次运行上计算 Mean Checklist Score、run-to-run SD 和 mean response word count，共形成 686 个 question-level condition estimates。49 道题中的 42 道 independent questions 具有唯一的 source-round Processing Demand Bits (PDB)，用于 SQ4；其余 7 道 integrative questions 用作 SQ1–SQ3 的共同题型维度，但不进入 continuous PDB analysis。

本节按照四个递进的 Subquestions 报告结果。Section 4.3.2 首先检验三种 Prompt learners 是否随 ADHD-description intensity 形成可辨识的 performance differentiation；Section 4.3.3 检验四种 CPB conditions 是否随 registered constraint severity 形成 graded response；Section 4.3.4 使用同一 learner condition 的 clean–distracted difference 比较两种 representations 的 distraction sensitivity；Section 4.3.5 最后检验 question performance 与 source-round PDB 的关系。Section 4.3.6 将四组结果汇总并直接回答 RQ2。

#### 4.3.2 SQ1 — Persona Differentiation

SQ1 检验 Prompt-NT、Moderate-Intensity Prompt-ADHD 和 High-Intensity Prompt-ADHD 是否形成与 persona intensity 对应的 behavioural differentiation。主要结果为五次运行后的 question-level Mean Checklist Score；平均 question-level SD 描述同一道题在五次运行中的稳定性，mean answer words 仅用于描述回答形式。Ordering Consistency Rate (OCR) 则统计满足 \(\bar S_{\mathrm{NT}}\geq\bar S_{\mathrm{Moderate}}\geq\bar S_{\mathrm{High}}\) 的题目比例，并允许条件间得分相等。

**Table 4.RQ2-1. Overall performance and response characteristics of Prompt learners**

| Material condition | Prompt learner | Mean Checklist Score | Mean question-level SD | Mean answer words |
|---|---|---:|---:|---:|
| Clean | Prompt NT | 9.898 | 0.140 | 79.48 |
| Clean | Prompt ADHD — Moderate | 9.823 | 0.091 | 80.99 |
| Clean | Prompt ADHD — High | 9.837 | 0.203 | 87.23 |
| Distracted | Prompt NT | 9.871 | 0.161 | 80.84 |
| Distracted | Prompt ADHD — Moderate | 9.864 | 0.000 | 81.41 |
| Distracted | Prompt ADHD — High | 9.837 | 0.129 | 86.07 |

![Study 2 SQ1 persona differentiation](</Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Study2_SQ1_Persona_Differentiation.png>)

**Figure 4.RQ2-1. Persona-prompted learning performance and run-to-run stability.** Panel A reports the five-run mean Checklist Score for Prompt-NT, Moderate-Intensity Prompt-ADHD and High-Intensity Prompt-ADHD under clean and distracted materials. Panel B reports the corresponding mean question-level run-to-run SD.

/Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Study2_SQ1_Persona_Differentiation.png

三种 Prompt conditions 的总体得分均接近量表上限。Clean materials 下最高与最低 condition 之间仅相差 0.075 分；distracted materials 下相差 0.034 分。Moderate condition 在 clean materials 下并未低于 High condition，三种 Prompt learners 因而没有在总体均值上形成稳定的 NT → Moderate → High 梯度。High-Intensity Prompt-ADHD 的回答平均更长，但这一 response-length difference 没有对应到更低或更不稳定的总体 performance。

Question-level OCR 在 clean materials 下为 \(44/49=89.80\%\)，在 distracted materials 下为 \(47/49=95.92\%\)。然而，该指标采用 non-strict ordering，允许大量 near-ceiling ties；因此，较高 OCR 说明多数问题没有违反预期方向，但不能单独证明三种 persona conditions 产生了具有实际幅度的 performance differentiation。结合总体均值、SD 和 response length，SQ1 仅得到有限支持：persona intensity 改变了部分回答特征，但没有形成清晰、幅度稳定的 learning-performance separation。

#### 4.3.3 SQ2 — Graded CPB Response

SQ2 使用相同的 question-level outcomes 检验 CPB Zero、Low、Medium 和 High 是否随 registered constraint severity 增强形成 graded performance response。CPB OCR 统计满足 \(\bar S_{\mathrm{Zero}}\geq\bar S_{\mathrm{Low}}\geq\bar S_{\mathrm{Medium}}\geq\bar S_{\mathrm{High}}\) 的题目比例，同样允许 ties。

**Table 4.RQ2-2. Overall performance and response characteristics of CPB learners**

| Material condition | CPB condition | Mean Checklist Score | Mean question-level SD | Mean answer words |
|---|---|---:|---:|---:|
| Clean | CPB Zero | 9.415 | 0.178 | 32.75 |
| Clean | CPB Low | 7.830 | 0.289 | 36.29 |
| Clean | CPB Medium | 7.293 | 0.154 | 37.25 |
| Clean | CPB High | 6.347 | 0.286 | 36.03 |
| Distracted | CPB Zero | 9.374 | 0.262 | 33.46 |
| Distracted | CPB Low | 6.517 | 1.967 | 39.88 |
| Distracted | CPB Medium | 4.680 | 2.388 | 42.91 |
| Distracted | CPB High | 3.014 | 1.853 | 43.43 |

![Study 2 SQ2 graded CPB response](</Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Study2_SQ2_Graded_CPB_Response.png>)

**Figure 4.RQ2-2. Graded CPB learning performance and run-to-run stability.** Panel A reports the five-run mean Checklist Score for CPB Zero, Low, Medium and High under clean and distracted materials. Panel B reports the corresponding mean question-level run-to-run SD.

/Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Study2_SQ2_Graded_CPB_Response.png

两种 material conditions 均呈现预期的 aggregate ordering。Clean materials 下，平均分从 CPB Zero 的 9.415 依次下降至 Low 的 7.830、Medium 的 7.293 和 High 的 6.347；distracted materials 下则从 9.374 依次下降至 6.517、4.680 和 3.014。与 clean condition 相比，distracted condition 中 Low、Medium 和 High 的 question-level SD 明显增大，表明 stochastic Attention triggering 与 WM restriction 同时增加了跨运行差异。

CPB OCR 在 clean materials 下为 \(42/49=85.71\%\)，在 distracted materials 下为 \(38/49=77.55\%\)。因此，registered constraint severity 在总体均值上形成了完整的 Zero → Low → Medium → High 梯度，但这一顺序没有在每一道题上严格保持。SQ2 在 aggregate graded-response 层面得到支持，同时 item-level OCR 表明 stochastic processing trajectories 会造成局部偏离。

#### 4.3.4 SQ3 — Distraction Sensitivity

SQ3 使用相同 learner condition 在 clean 与 distracted materials 下的配对得分计算 distraction cost：

\[
\Delta D_{q,c}
=
\bar S_{q,c,\mathrm{clean}}
-
\bar S_{q,c,\mathrm{distracted}}.
\]

正值表示 distracted materials 下 performance 较低。Table 4.RQ2-3 报告 49 道题上的平均 distraction cost、其 95% confidence interval，以及 distracted condition 相对于 clean condition 的平均 question-level SD change。

**Table 4.RQ2-3. Distraction-associated changes across learner conditions**

| Learner condition | Mean distraction cost [95% CI] | Mean SD change | Mean answer-word change |
|---|---:|---:|---:|
| Prompt NT | 0.027 [−0.152, 0.206] | +0.021 | +1.36 |
| Prompt ADHD — Moderate | −0.041 [−0.087, 0.006] | −0.091 | +0.42 |
| Prompt ADHD — High | 0.000 [−0.146, 0.146] | −0.074 | −1.16 |
| CPB Zero | 0.041 [−0.113, 0.194] | +0.085 | +0.71 |
| CPB Low | 1.313 [0.774, 1.852] | +1.677 | +3.58 |
| CPB Medium | 2.612 [1.843, 3.382] | +2.234 | +5.65 |
| CPB High | 3.333 [2.316, 4.350] | +1.567 | +7.40 |

![Study 2 SQ3 distraction sensitivity](</Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Study2_SQ3_Distraction_Sensitivity.png>)

**Figure 4.RQ2-3A. Distraction-associated changes in score, stability and response length.** Panel A reports mean distraction cost, defined as clean minus distracted Checklist Score. Panel B reports the change in question-level run-to-run SD, and Panel C reports the change in mean answer words. Error bars represent 95% question-level confidence intervals.

/Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Study2_SQ3_Distraction_Sensitivity.png

![Study 2 SQ3 lesson-level distraction-cost heatmap](</Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Study2_SQ3_Lesson_Distraction_Cost_Heatmap.png>)

**Figure 4.RQ2-3B. Lesson-level distribution of distraction costs across learner conditions.** Each cell reports the lesson-level Mean Checklist Score under clean materials minus the corresponding score under distracted materials. Positive values therefore indicate lower performance under distraction, while values close to zero indicate little material-condition change. The heatmap supplements the aggregate estimates in Figure 4.RQ2-3A by showing whether their direction is consistent across the seven teaching materials.

/Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Study2_SQ3_Lesson_Distraction_Cost_Heatmap.png

三种 Prompt learners 的 mean distraction cost 均接近 0，且 confidence intervals 均跨越 0。Moderate-Intensity 和 High-Intensity Prompt-ADHD 没有相对于 Prompt-NT 表现出更大的 distraction-associated decrement；其 SD 与回答长度变化也未形成随 persona intensity 增强的系统模式。CPB Zero 同样接近 0，与其关闭 Attention 和 WM information-loss constraints 的设计一致。

相反，CPB Low、Medium 和 High 的 mean distraction cost 分别为 1.313、2.612 和 3.333，三个 intervals 均位于 0 以上，并随 constraint severity 增强而扩大。相同条件的 mean SD change 也均为正，说明 distracted materials 不仅降低其平均 performance，也增加了 stochastic runs 之间的结果差异。由此，SQ3 得到支持：persona prompting 对 controlled distraction 的 behavioural response 接近于零，而 CPB conditions 呈现出由其 factorised Attention/WM constraints 所调节的 graded distraction sensitivity。

Figure 4.RQ2-3B 进一步表明，该差异并非仅由单篇教材驱动。三种 Prompt learners 与 CPB Zero 的 lesson-level distraction costs 均围绕 0 小幅波动，并在不同教材间出现正负方向变化；CPB Low、Medium 和 High 则在七篇教材中全部呈现正向 cost。CPB Low 的 lesson-level costs 为 0.38–2.67，Medium 为 1.14–4.00，High 为 1.33–5.33。该跨教材分布与总体估计一致，说明 controlled distraction 的 performance cost 在 constrained CPB conditions 中具有较广泛的 material coverage，而 Prompt conditions 未形成相同模式。

#### 4.3.5 SQ4 — Processing-Demand Sensitivity

SQ4 限定于能够唯一映射至 source Teaching Round 的 42 道 independent questions。主要指标为每增加 100 bits PDB 时 Checklist Score 的线性变化 \(\beta_{\mathrm{PDB},100}\)；Spearman \(\rho\) 描述不依赖线性假设的 rank association；Low–High gap 则表示预先分组的 low-demand questions 平均分减去 high-demand questions 平均分。负向 slope 和 \(\rho\)，以及正向 Low–High gap，均表示 higher processing demand 与较低 performance 相关。

**Table 4.RQ2-4. Processing-demand sensitivity across learner and material conditions**

| Learner condition | Slope/100 bits, Clean | Slope/100 bits, Distracted | \(\rho\), Clean | \(\rho\), Distracted | Low–High gap, Clean | Low–High gap, Distracted |
|---|---:|---:|---:|---:|---:|---:|
| Prompt NT | +0.135 | +0.045 | +0.360 | +0.035 | −0.175 | −0.016 |
| Prompt ADHD — Moderate | +0.023 | 0.000 | +0.166 | N/A | −0.063 | 0.000 |
| Prompt ADHD — High | +0.018 | +0.004 | −0.007 | +0.032 | 0.000 | −0.032 |
| CPB Zero | −0.022 | +0.075 | −0.050 | −0.032 | −0.032 | −0.286 |
| CPB Low | −2.217 | −1.876 | −0.441 | −0.392 | +3.032 | +2.381 |
| CPB Medium | −2.748 | −2.223 | −0.499 | −0.578 | +4.603 | +3.524 |
| CPB High | −2.355 | −1.548 | −0.410 | −0.536 | +3.603 | +2.302 |

![Study 2 SQ4 PDB performance profiles](</Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Study2_SQ4_PDB_Performance_Profiles.png>)

**Figure 4.RQ2-4A. Question-level performance profiles across source-round Processing Demand Bits.** Each point represents one of the 42 independent questions and its five-run Mean Checklist Score; fitted lines summarise the condition-specific linear relationship. Panels A and B show Prompt learners under clean and distracted materials, while Panels C and D show the four CPB conditions. The figure provides a direct visualisation of the PDB–performance relationship subsequently quantified by the slope estimates in Figure 4.RQ2-4B and the slopes and rank correlations in Table 4.RQ2-4.

/Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Study2_SQ4_PDB_Performance_Profiles.png

Figure 4.RQ2-4A 提供了这一关系的 question-level visual evidence。Prompt learners 在 clean 与 distracted materials 下的 fitted lines 均接近水平，且多数题目集中于 ceiling score；CPB Zero 同样未显示随 PDB 增加而明显下降。相反，CPB Low、Medium 和 High 在两种 material conditions 下均呈现向下的 fitted profiles，表明来自 higher-PDB Teaching Rounds 的 assessment questions 更容易出现较低得分。该图直观呈现了 processing-demand sensitivity 主要出现在启用 factorised constraints 的 CPB conditions 中，而不是由 ADHD persona description intensity 单独产生。

![Study 2 SQ4 processing-demand sensitivity](</Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Study2_SQ4_Processing_Demand_Sensitivity.png>)

**Figure 4.RQ2-4B. PDB–score slopes across learner and material conditions.** Points report the estimated change in Mean Checklist Score per 100-bit increase in source-round PDB; horizontal intervals represent 95% confidence intervals. The vertical reference line marks a slope of zero. This figure quantifies the direction and uncertainty of the visual relationships shown in Figure 4.RQ2-4A.

/Users/willow/Documents/Code/[Msc] ADHD Simulation/UCL_Master_s_Thesis_Qingqing/Figures/Chapter4/Study2_SQ4_Processing_Demand_Sensitivity.png

Figure 4.RQ2-4B 对上述 visual pattern 进行了带有 uncertainty estimates 的量化。三种 Prompt learners 与 CPB Zero 的 slopes 均接近 0，且其 95% confidence intervals 均包含 0。相应 Spearman correlations 也较弱，Low–High gaps 接近 0 或略为负值。Moderate-Intensity Prompt-ADHD 在 distracted materials 下的 42 道 independent questions 得分完全相同，因此 slope 为 0，Spearman \(\rho\) 因结果变量无方差而不可定义。总体而言，persona intensity 没有形成可区分的 processing-demand sensitivity。

CPB Low、Medium 和 High 在 clean 与 distracted materials 下均呈现负向 slopes，且对应的 95% confidence intervals 均位于 0 以下。其 Spearman \(\rho\) 介于 −0.392 和 −0.578，Low–High gaps 均为正值，说明 higher-PDB source rounds 与较低 question performance 之间存在一致的负向关系。Slope magnitude 并未严格按照 Low → Medium → High 单调增强，Medium condition 的下降幅度最大；因此，SQ4 支持 constrained CPB 对 processing demand 的系统敏感性，但不支持以 slope magnitude 表示的严格 severity ordering。

#### 4.3.6 RQ2 Summary

Section 4.3.1 将 RQ2 分解为四个问题：persona intensity 是否形成 behavioural differentiation；CPB constraint severity 是否形成 graded response；两种 representations 是否对 controlled distraction 表现出不同 sensitivity；以及其 performance 是否随 instructional processing demand 系统变化。四组结果汇总见 Table 4.RQ2-5。

**Table 4.RQ2-5. Summary of evidence for RQ2**

| Subquestion | Primary evidence | Key result | Direct conclusion |
|---|---|---|---|
| **SQ1 — Persona differentiation** | Mean score, SD, Prompt OCR | All Prompt means = 9.823–9.898; OCR = 89.80%–95.92% under a non-strict rule | Persona intensity did not produce a substantively separated performance gradient |
| **SQ2 — Graded CPB response** | Mean score, SD, CPB OCR | Aggregate score followed Zero > Low > Medium > High; OCR = 77.55%–85.71% | Registered CPB severity produced a clear aggregate graded response |
| **SQ3 — Distraction sensitivity** | Clean–distracted cost | Prompt costs ≈ 0; CPB Zero/Low/Medium/High = 0.041/1.313/2.612/3.333 | Controlled distraction produced graded effects in CPB but not in persona prompting |
| **SQ4 — Processing-demand sensitivity** | PDB slope, \(\rho\), Low–High gap | Prompt and CPB Zero slopes ≈ 0; constrained CPB slopes were consistently negative | Processing-demand sensitivity emerged under factorised CPB constraints, not persona intensity |

SQ1 表明，Moderate- 和 High-Intensity ADHD descriptions 没有在接近满分的 Prompt responses 中产生具有实际幅度的 performance differentiation。SQ2 则显示，CPB 的 registered constraint severity 能够在两种 material conditions 下形成清晰的 aggregate score gradient，尽管 stochastic trajectories 使部分 question-level ordering 偏离预期。SQ3 进一步表明，Prompt learners 的 clean–distracted differences 均接近 0，而 CPB 的 distraction cost 随 Low、Medium 和 High constraints 逐步扩大。最后，SQ4 显示 constrained CPB performance 与 source-round PDB 呈稳定负向关系，而 Prompt conditions 与 CPB Zero 均未表现出相同模式。

据此，RQ2 可以得到肯定回答：**在冻结教材、student model、assessment questions 和 scoring procedure 的范围内，相较于 persona prompting，CPB 产生了对 controlled distraction 和 instructional processing demand 更系统、方向更一致且能够与注册 constraint parameters 对应的 learning behaviour。** 这一结论不依赖 CPB 产生更低的绝对分数，而建立在 graded constraint response、clean–distracted sensitivity 和 PDB-related performance pattern 的共同证据上。结果支持 CPB 在本实验中的 comparative representational validity，但不构成其与真实 ADHD learners 临床或生物学等效的证据。

### 4.4 RQ3 — Cross-Attribute Robustness

#### 4.4.1 RQ3 Results Overview

Study 3 对应 RQ3，检验在引入 Language Ability 与 Big-Five profile prompts 后，factorised CPB representation 是否比 joint persona prompting 表现出更小的 baseline-relative outcome displacement，并更好地保持 Study 2 中既有的 learner-condition ordering 与 processing-demand sensitivity。正式分析固定使用 distracted materials，包括两种 Prompt-ADHD intensities 和三种 CPB constraint levels；每种 learner condition 分别与 A1、A2、B1 和 B2 四个 profiles 组合，并各运行五次。因此，Study 3 共包含

\[
5\text{ learner conditions}
\times4\text{ profiles}
\times5\text{ runs}
=100\text{ simulated-learner runs},
\]

对应 4,900 份 answers 及其 Qwen Judge scores。每个 Study 3 cell 均与相同 learner condition 在 Study 2 distracted arm 中的结果进行匹配，而不是与其他 learner type 的绝对分数直接比较。

本节按照三个 Subquestions 依次报告结果。SQ1 检验 Mean Checklist Score、question-level run-to-run SD 和 Mean Answer Words 相对于 matched Study 2 baseline 的偏移；SQ2 检验 Prompt 的 Moderate \(\geq\) High 以及 CPB 的 Low \(\geq\) Medium \(\geq\) High 是否得到保持；SQ3 最后检验 42 道 Independent Questions 上的 PDB–performance relationship 是否保持稳定。RQ3 的判断建立在三个层面的共同证据上，不将某一个 profile 的高低分或单一指标解释为整体 robustness。

#### 4.4.2 SQ1 — Baseline-Relative Outcome Displacement

SQ1 以相同 learner condition 在 Study 2 distracted arm 中的结果为 baseline，分别计算每个 A1–B2 profile 的 Mean Checklist Score、平均 question-level run SD 和 Mean Answer Words 偏移。绝对偏移越小，表示新增 profile prompts 对既有 outcome 的扰动越小。回答词数用于描述 response form，不被解释为 retained knowledge 或 learning performance。

**Table 4.RQ3-1. Mean absolute baseline-relative displacement across A1–B2 profiles**

| Representation | Mean Checklist Score displacement | Mean question-level SD displacement | Mean Answer Words displacement |
|---|---:|---:|---:|
| **Prompt** | 0.535 | 0.223 | 26.635 |
| **CPB** | 0.283 | 0.163 | 2.885 |

![Study 3 SQ1 baseline-relative displacement](</Users/willow/Documents/Code/[Msc] ADHD Simulation/experiments/final_experiments/outputs/STUDY-3/figures/Study3_Figure_1_SQ1_baseline_relative_displacement.png>)

**Figure 4.RQ3-1. Baseline-relative displacement in performance, run-to-run variability and response length.** Points report the mean matched question-level displacement for each learner condition and profile; vertical intervals represent 95% confidence intervals over the 49 matched question-level differences. The horizontal zero line denotes no change from the corresponding Study 2 distracted baseline.

/Users/willow/Documents/Code/[Msc] ADHD Simulation/experiments/final_experiments/outputs/STUDY-3/figures/Study3_Figure_1_SQ1_baseline_relative_displacement.png

CPB 在三个 outcomes 上均表现出较小的平均绝对偏移。其 Mean Checklist Score displacement 为 0.283，约为 Prompt 的 0.535 的一半；平均 question-level SD displacement 也从 Prompt 的 0.223 降至 CPB 的 0.163。最明显的差异出现在 response length：Prompt 的 Mean Answer Words 平均绝对偏移达到 26.635，而 CPB 仅为 2.885。

Profile-level results 显示，Prompt 的 score displacement 介于 \(-0.952\) 和 \(+0.014\) 之间，其中 A2 在 Moderate- 和 High-Intensity Prompt-ADHD 下均产生约 \(-0.952\) 的变化。CPB 的 score displacement 介于 \(-0.177\) 和 \(+0.646\) 之间，多数 profile-specific changes 小于对应的 Prompt changes。A2 和 B2 同时使 Prompt answers 平均缩短约 42–51 词，而 CPB 各 profiles 的词数变化均未超过约 5 词。该结果表明，新增 profiles 对 joint Prompt representation 的回答形式和总体 outcome 产生了更广泛的改变，而 factorised CPB 的 baseline-relative displacement 整体较小。因此，SQ1 支持 CPB 在 overall outcome stability 层面具有更强 robustness；这一结论不等同于新增 Language Ability 或 Big-Five traits 已被准确模拟。

#### 4.4.3 SQ2 — Matched-Ordering Preservation

SQ2 使用与 Study 2 相同的 non-strict Ordinal Consistency Rate (OCR)。Prompt branch 检验每道题是否满足 Moderate \(\geq\) High，CPB branch 检验是否满足 Low \(\geq\) Medium \(\geq\) High。OCR 包含 strict ordering 与 tie-consistent ordering，因此同时报告 tie 和 reverse proportions，以避免将大量同分误解为严格 differentiation。由于两个 branches 所包含的 ordering constraints 数量不同，本节不直接比较其原始 OCR，而以各自相对于 matched baseline 的变化作为主要 cross-representation evidence。

**Table 4.RQ3-2. Matched-ordering composition in Study 2 and across A1–B2 profiles**

| Representation | Profile | Strict ordering | Tie-consistent ordering | Reverse ordering | OCR | OCR change from baseline |
|---|---|---:|---:|---:|---:|---:|
| **Prompt** | Study 2 baseline | 6.12% | 93.88% | 0.00% | 100.00% | — |
|  | A1 | 10.20% | 87.76% | 2.04% | 97.96% | −2.04 pp |
|  | A2 | 26.53% | 57.14% | 16.33% | 83.67% | −16.33 pp |
|  | B1 | 10.20% | 85.71% | 4.08% | 95.92% | −4.08 pp |
|  | B2 | 16.33% | 81.63% | 2.04% | 97.96% | −2.04 pp |
| **CPB** | Study 2 baseline | 34.69% | 44.90% | 20.41% | 79.59% | — |
|  | A1 | 38.78% | 44.90% | 16.33% | 83.67% | +4.08 pp |
|  | A2 | 42.86% | 28.57% | 28.57% | 71.43% | −8.16 pp |
|  | B1 | 26.53% | 46.94% | 26.53% | 73.47% | −6.12 pp |
|  | B2 | 38.78% | 32.65% | 28.57% | 71.43% | −8.16 pp |

![Study 3 SQ2 matched ordering](</Users/willow/Documents/Code/[Msc] ADHD Simulation/experiments/final_experiments/outputs/STUDY-3/figures/Study3_Figure_2_SQ2_matched_ordering_composition.png>)

**Figure 4.RQ3-2. Strict, tie-consistent and reverse matched-ordering composition.** The left panel reports Prompt Moderate \(\geq\) High and the right panel reports CPB Low \(\geq\) Medium \(\geq\) High. OCR equals the combined strict and tie-consistent proportions; the decomposition shows whether ordering preservation reflects strict differentiation or equal scores.

/Users/willow/Documents/Code/[Msc] ADHD Simulation/experiments/final_experiments/outputs/STUDY-3/figures/Study3_Figure_2_SQ2_matched_ordering_composition.png

Prompt 的 mean absolute OCR change 为 6.12 percentage points (pp)，CPB 为 6.63 pp，两者仅相差 0.51 pp。因此，新增 profiles 后的总体 ordering preservation 没有表现出清晰的 CPB advantage。Prompt 的 baseline OCR 虽为 100%，但其中 93.88% 来自 ties；A1、B1 和 B2 仍主要由 tie-consistent cases 构成，而 A2 的 reverse ordering 上升至 16.33%，使 OCR 降至 83.67%。

CPB 的 mean absolute tie-rate change 为 7.65 pp，低于 Prompt 的 15.82 pp，说明 CPB 的 strict/tie composition 相对更稳定；但其 A2、B1 和 B2 reverse proportions 均高于 Study 2 baseline，导致相应 OCR 下降。由此，SQ2 提供混合证据：CPB 更好地保持了 ordering composition 中的 tie structure，但没有更好地保持总体 OCR。该结果不支持将 CPB 描述为在 matched ordering 上全面优于 Prompt。

#### 4.4.4 SQ3 — Processing-Demand Sensitivity Preservation

SQ3 限定于能够唯一映射至 source Teaching Round 的 42 道 Independent Questions。主要指标为每增加 100 PDB bits 时 Mean Checklist Score slope 相对于 matched Study 2 baseline 的变化 \(\Delta\beta_{\mathrm{PDB},100}\)。Spearman \(\rho\) displacement 和预定义 Low–High demand gap displacement 作为 supporting measures。三个指标均描述已有 behavioural PDB sensitivity 在新增 profiles 后发生了多大改变，而不将 slope 本身解释为 Working-Memory mechanism 的直接测量。

**Table 4.RQ3-3. Mean absolute displacement in processing-demand sensitivity across A1–B2 profiles**

| Representation | PDB slope displacement per 100 bits | Spearman \(\rho\) displacement | Low–High gap displacement |
|---|---:|---:|---:|
| **Prompt** | 0.341 | 0.256† | 0.569 |
| **CPB** | 0.480 | 0.112 | 0.444 |

† The Moderate-Intensity Prompt Study 2 baseline was constant across all 42 Independent Questions, so its Spearman coefficient and four profile-specific displacements were undefined. The Prompt summary is therefore based on the four estimable High-Intensity cells; no zero value was imputed.

![Study 3 SQ3 PDB slope displacement](</Users/willow/Documents/Code/[Msc] ADHD Simulation/experiments/final_experiments/outputs/STUDY-3/figures/Study3_Figure_3_SQ3_pdb_slope_displacement.png>)

**Figure 4.RQ3-3A. Baseline-relative displacement in PDB–performance slopes.** Points report profile-specific slope changes per 100 PDB bits and horizontal intervals represent 95% paired question-bootstrap confidence intervals. The vertical zero line denotes an unchanged slope relative to the matched Study 2 distracted baseline.

/Users/willow/Documents/Code/[Msc] ADHD Simulation/experiments/final_experiments/outputs/STUDY-3/figures/Study3_Figure_3_SQ3_pdb_slope_displacement.png

![Study 3 SQ3 PDB slope displacement heatmap](</Users/willow/Documents/Code/[Msc] ADHD Simulation/experiments/final_experiments/outputs/STUDY-3/figures/Study3_Figure_4_SQ3_pdb_slope_displacement_heatmap.png>)

**Figure 4.RQ3-3B. Profile-specific PDB-slope displacement across matched learner conditions.** Cell values report signed changes in score slope per 100 PDB bits relative to each learner condition's Study 2 distracted baseline. Values closer to zero indicate stronger preservation of the original PDB–performance relationship.

/Users/willow/Documents/Code/[Msc] ADHD Simulation/experiments/final_experiments/outputs/STUDY-3/figures/Study3_Figure_4_SQ3_pdb_slope_displacement_heatmap.png

按照主要 slope measure，Prompt 的 mean absolute displacement 为 0.341，低于 CPB 的 0.480，因此该指标不支持 CPB 具有更强的整体 PDB-sensitivity preservation。Prompt profile slopes 相对于接近零的 Study 2 baselines 均向正方向移动，profile-specific changes 为 +0.198 至 +0.469。CPB 则表现出明显的 profile dependence：A1 和 B1 下的 slope changes 多数接近零，介于 −0.140 和 +0.150；A2 和 B2 下的变化更大，介于 +0.604 和 +1.149，表明部分 profiles 明显减弱了 Study 2 中原有的负向 PDB–performance relationship。

Supporting measures 给出不同方向的结果。CPB 的 mean absolute Spearman displacement 为 0.112，低于可计算 Prompt cells 的 0.256；其 Low–High gap displacement 也为 0.444，低于 Prompt 的 0.569。因此，rank association 和预定义 demand-group gap 相对更支持 CPB preservation，而主要 linear slope 指标则相反。综合而言，SQ3 只得到部分支持：新增 profiles 后既有 processing-demand sensitivity 并未完全消失，但其保持程度依赖具体 profile 和评价指标，不能据此主张 CPB 在所有 PDB-related measures 上均比 Prompt 更稳健。

#### 4.4.5 RQ3 Summary

Section 4.4.1 将 RQ3 分解为三个相互补充的检验：新增 profiles 对总体 outcomes 造成多大偏移、Study 2 中的 learner-condition ordering 是否得到保持，以及既有 PDB–performance relationship 是否保持稳定。三组结果汇总见 Table 4.RQ3-4。

**Table 4.RQ3-4. Summary of evidence for RQ3**

| Subquestion | Primary evidence | Key result | Direct conclusion |
|---|---|---|---|
| **SQ1 — Baseline-relative outcome displacement** | Score, question-level SD and answer-word displacement | CPB = 0.283/0.163/2.885; Prompt = 0.535/0.223/26.635 | CPB showed clearly smaller overall outcome and response-form displacement |
| **SQ2 — Matched-ordering preservation** | OCR and strict/tie/reverse composition | OCR change: Prompt 6.12 pp, CPB 6.63 pp; tie-rate change: 15.82 vs 7.65 pp | Overall OCR preservation was comparable; CPB showed a more stable tie composition but no general ordering advantage |
| **SQ3 — PDB-sensitivity preservation** | PDB slope, Spearman \(\rho\), Low–High gap displacement | Slope favoured Prompt; \(\rho\) and Low–High gap favoured CPB | Preservation was profile- and metric-dependent rather than uniformly stronger under CPB |

SQ1 提供了最清晰的 robustness evidence：相对于 matched Study 2 baseline，CPB 在平均 performance、重复运行 variability 和 response length 上均比 joint Prompt representation 产生更小的偏移。SQ2 则显示，两种 representations 的 mean absolute OCR change 基本相同；CPB 虽然具有更小的 tie-rate change，但没有形成总体 ordering-preservation advantage。SQ3 同样呈现混合结果：CPB 的 rank association 和 Low–High gap 变化较小，但其主要 PDB-slope displacement 反而大于 Prompt，并且 A2 与 B2 下的变化尤其明显。

据此，RQ3 得到**有条件支持**：**在冻结的 Study 2 baseline、distracted materials、A1–B2 profile prompts 和五次重复运行范围内，factorised CPB representation 相较于 joint persona prompting 表现出更小的总体 learning-performance、run-to-run variability 和 response-length displacement；但这一优势没有一致扩展至 matched-ordering preservation 或所有 processing-demand sensitivity measures。** 因此，CPB 所表现的是以 overall outcome stability 为主、且依赖 profile 与指标的 multidimensional robustness，而不是对新增 profile prompts 的完全不敏感。

这一结论仅支持 **robustness under the addition of Language Ability and Big-Five profile prompts**。Study 3 没有独立验证生成行为是否忠实表达预设的 Language Ability 或 Big-Five constructs，因此结果不构成这些 learner traits 得到准确模拟的证据。它也不表明 CPB 能消除所有 cross-attribute effects，而是说明 functional factorisation 在总体 outcome 层面限制了新增 prompt attributes 所造成的广泛扰动。

### 4.5 Summary of Findings

## 5  Discussion

### 5.1 Answering the Main Research Question

### 5.2 Interpreting the Cognitive-Process Results

#### 5.2.1 Response Length, Fragmented Memory, and Information Retention

Study 2 中一个表面上反直觉的结果是，在 distracted materials 下，CPB constraint 越强，student answers 的平均词数反而越多：CPB Zero、Low、Medium 和 High 分别为 33.46、39.88、42.90 和 43.43 词；与此同时，其 Mean Checklist Score 却从 9.374 依次下降至 6.517、4.680 和 3.014。该模式说明，response length 不能被直接解释为 retained knowledge 的数量。较长的回答可以包含更多正确知识，也可以由重复、分散的相关片段、回答组织语言或对缺失信息的显式说明构成。

这一结果与 CPB 的 memory-constrained answering procedure 有关。所有 CPB learners 都只能依据 lesson-specific Explicit LTM 回答；当 LTM 仅支持部分答案时，冻结的 Memory Restriction Prompt 要求模型只陈述仍受支持的内容，并明确说明其余信息没有保留。随着 Attention 和 WM constraints 增强，完整且直接对应问题的 compact memory entry 更可能变得 unavailable，而散落于其他 Teaching Rounds 的相关片段仍可能保留。Answering model 因而可能先整合这些 remaining fragments，再补充 information-not-retained statement。全量 distracted-condition answers 中，此类显式缺失声明的比例从 CPB Zero 的 1.2% 增至 Low 的 17.1%、Medium 的 31.0% 和 High 的 33.5%。因此，更强 constraint 所产生的较长回答主要反映 fragmented-memory integration 与 protocol-required uncertainty disclosure，而不是更高的信息保留。

Question-level cases 进一步说明了 surface length 与 retained content 的分离。例如，`L05_QC04` 在 CPB Low 和 High 下均得到 10 分，但平均回答长度分别为 17.0 和 91.6 词：High condition 在缺少 compact list representation 时，从多个 LTM entries 重建并解释各个保留项目。相反，`L05_QC10` 在 Low condition 下以 20.0 词得到 10 分，而 High condition 使用 51.8 词复述部分相关信息并声明关键内容未保留，最终得分为 0。回答更长因而既可能伴随完整正确答案，也可能伴随冗长但不满足 frozen criteria 的 partial answer。

该效应也并非在所有 material conditions 下严格单调。Clean materials 中，CPB Medium 的平均回答长度为 37.25 词，而 High 为 36.03 词。这表明至少存在两个方向相反的过程：部分信息缺失会通过 fragment integration 和 missing-information statement 增加输出长度；当可用记忆进一步减少时，可供复述的内容本身又会缩短。由此，本研究仅将 mean answer words 作为 descriptive response characteristic，而不将其作为 knowledge retention、learning effectiveness 或 cognitive load 的直接指标。

若要在未来工作中更直接量化 Source information 在 Explicit LTM 或 Answer 中的保留程度，可以采用基于 Atomic Content Units (ACUs) 的 content-unit coverage analysis。Liu et al. 提出的 ACU protocol 将参考文本拆分为细粒度 semantic units，并通过判断 candidate summary 是否表达每个 unit 来提高内容覆盖评价的可解释性与标注一致性 [liu-etal-2023-revisiting]。迁移到本研究时，可以先为 frozen instructional Source \(S\) 建立并人工复核 ACU 集合 \(\mathcal A(S)=\{a_1,\ldots,a_N\}\)，再计算 Explicit LTM \(L\) 对这些 units 的覆盖：

\[
\operatorname{ACU\ Retention}(L,S)
=
\frac{
\sum_{i=1}^{N}
\mathbb{I}[a_i\text{ is expressed in }L]
}{
N
},
\qquad
\operatorname{ACU\ Loss}(L,S)
=
1-\operatorname{ACU\ Retention}(L,S).
\]

该指标能够区分“生成文本更长”和“保留了更多 source-grounded information”，也可以沿 Source → Available Input → Explicit LTM → Answer 分别计算 content coverage。不过，ACU 原本是 summarisation evaluation protocol，而不是人类记忆模型；其在本研究中的使用应被明确表述为 task-specific adaptation。可靠应用还需要冻结 ACU segmentation、记录 source grounding、人工复核 atomicity 与 exhaustivity，并验证 ACU matching 的重复性。因此，本研究当前不使用尚未冻结的 ACU annotations 替代已报告的 RQ1 或 RQ2 measures，而将其视为进一步完善 semantic information-retention measurement 的方法方向。

### 5.3 What Persona Prompting Can and Cannot Represent

### 5.4 Factorised Student Representation

### 5.5 Implications for LLM-Based Learner Simulation

#### 5.5.1 From Persona Description to Functional Representation

#### 5.5.2 Learner Models May Need to Be Factorised Rather Than Monolithic

#### 5.5.3 Evaluation Should Target Learning Processes and Outcomes, Not Only Persona Plausibility

#### 5.5.4 Traceability May Be Important for Scientific Uses of Synthetic Learners

#### 5.5.5 Implications for Educational Use

### 5.6 Strengths and Limitations

### 5.7 Ethical Interpretation

## Chapter 6  Conclusions

## Chapter 7  Future Work

## References

## Appendices
