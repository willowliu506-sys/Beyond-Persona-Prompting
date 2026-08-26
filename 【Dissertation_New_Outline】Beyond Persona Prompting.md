# Beyond Persona Prompting: A Cognitive-Process-Based Framework for ADHD Student Simulation with Large Language Models

## Outline Planning Framework

**Planning note:** This file is a planning outline and contains no thesis prose. Complete Stages 1 and 2 before expanding the individual sections.

### Current Research Questions and Evidence Mapping

| Research question | Evidential role | Experimental comparison | Primary evidence |
|---|---|---|---|
| **RQ1 — Mechanism:** Does the CPB processing pipeline produce intended and traceable transitions from instructional information, through attention, working-memory processing and encoding, to the downstream knowledge state? | Mechanistic validity | **Study 1:** 2 × 2 Attention OFF/ON × WM OFF/ON ablation with a shared encoding stage and an A0W0 encoding-only baseline. | 机制正确触发率； |
| **RQ2 — Representation:** Compared with persona prompting, does CPB produce learning behaviour that shows more theoretically consistent sensitivity to controlled distraction and processing demand? | Comparative representational validity | **Study 2:** Matched Prompt-NT, Prompt-ADHD, CPB Zero, CPB Low, CPB Medium, CPB High conditions under controlled distraction and processing-demand manipulations. |  |
| **RQ3 — Multidimensional Robustness:** When additional functionally heterogeneous learner characteristics are introduced, does a factorised CPB representation maintain learning outcomes more consistently than joint persona prompting? | Representational robustness | **Study 3:** Matched aligned and conflicting attribute profiles under prompt-based and factorised representations |  |

### Multi-Pass Outline and Draft Review Rules

| Review pass | Review focus | Verification question |
|---|---|---|
| 1. Structure review | Correct placement and non-duplication of content | Is each item located in the section where the reader needs it, without unnecessary repetition elsewhere? |
| 2. Argument review | Claim–evidence–reasoning chain | Does every substantive conclusion have sufficient theoretical, methodological, or empirical support? |
| 3. RQ review | Traceability to the research questions | Does each section make a clear and necessary contribution to answering an RQ or supporting the answer? |
| 4. Consistency review | Terminology, condition names, variables, numbering, and cross-references | Are the same concepts and experimental objects named and formatted consistently throughout? |
| 5. Boundary review | Scope and interpretation of claims | Does the text distinguish theoretical consistency from ADHD fidelity and avoid unsupported clinical or causal claims? |
| 6. Language review | Coherence, transitions, grammar, formatting, and redundancy | Does the prose form a continuous argument and comply with the thesis writing rules? |

### Section Planning Card

Each inherited heading below contains the following planning fields:

- Section purpose
- Question answered
- RQ contribution
- Dependencies from earlier sections
- Required evidence or content
- Core references
- Core figures and tables
- Writing logic
- Expected conclusion
- Transition to the next section
- Claim boundary

Complete the cards before drafting prose. If a field is not applicable, record `N/A` and briefly explain why.


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



### 2.3 The Representation Challenge of Multidimensional Learner Characteristics

暂停文献堆砌，综合2.2的方法放到一起，发现了什么共性问题：prompt模拟把所有维度都放到一起。

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

- **Section purpose:** 整个实验怎么跑？
- 宏观流程图（教学阶段+回答问题阶段）
#### 3.1.1 Overall Research Workflow

![image-20260825011018461](/Users/willow/Library/Application Support/typora-user-images/image-20260825011018461.png)

说明整个实验的两个主要阶段：

Teaching / Learning Phase → Assessment Phase

一张总流程图

强调所有 Study 共用这一总体框架

#### 3.1.2 Teaching Phase
**第一步：Instructional Exposure**

教材被划分为 Teaching Rounds，并按照固定顺序逐轮提供给 simulated learner。

这一层 Prompt 和 CPB 完全相同：

> same lesson
>  → same teaching rounds
>  → same sequence

**第二步：Representation-Specific Handling**

然后才说：

> 教材输入相同，但两种 learner representation 对教学信息的处理方式不同。

这里只点一下，不展开：

- Prompt learner：教学内容保留在 conversational context 中；
- CPB learner：教学内容经过显式 cognitive-processing pipeline。

然后马上告诉读者：

> 具体差异在 Section 3.3 介绍，CPB 内部机制在 Section 3.4 展开。

这样就不会在 3.1 提前讲细节。

**第三步：Post-Exposure State Formation**

教学结束后，两种 learner 都形成一个可用于后续 assessment 的状态，但这个状态形式不同：

- Prompt → frozen post-teaching conversation context；
- CPB → explicit encoded LTM。

这一步非常重要，因为它正好衔接 3.1.3：

> 形成 post-exposure state
>  → state frozen
>  → assessment questions independently branch
>  → answer generation。

#### 3.1.3 Assessment Phases

post-exposure state 被固定

每道题从相同状态独立 branch

assessment question + learner state → student answer

criterion-level checklist scoring

### 3.2 Shared Instructional and Assessment Resources

- **Section purpose: **共同学什么？答什么？怎么给分？Prompt 和 CPB 所有条件共同使用的实验资源。

#### 3.2.1 Source Instructional Materials
说明：
source lessons 从哪里来；
数量和范围；
为什么选择这些材料；
lesson structure。

这里同时放 Teaching-Material Integrity Checks：

preprocessing 后没有改变事实意义；
criterion-bearing information 没有丢失；
source IDs / sentence IDs 可追踪。

不再单独开 Methodological Validation。

#### 3.2.2 Text Preprocessing and Teaching-Round Segmentation

说明：

coreference resolution；
sentence-level preprocessing；
Teaching Round 如何划分；
round IDs；
为什么 Prompt 和 CPB 使用完全相同的 segmentation。

这里的核心：

instructional exposure granularity is controlled across representations.

#### 3.2.3 Instructional Processing-Demand Annotation and Item Selection

这里介绍 PDB 作为教材属性：

Processing Demand Bits 是什么；
每个 segment / round 如何得到 PDB；
Independent question 如何映射到 target round；
low / medium / high demand item 如何选择；
最终 assessment corpus 如何平衡。

注意：

这里负责定义“这个教材有多少 processing demand”。

至于：

WM 如何根据这个 demand 产生约束，

留到 3.4.2。

#### 3.2.4 Question Construction and Candidate Eligibility

说明：

question 类型；
Independent questions；
Integrative questions；
candidate question eligibility；
source-grounding；
每道题如何映射到 teaching information。

#### 3.2.5 Question-Targeted Distractor Construction and Assignment

说明：

distractor 是什么；
如何生成；
放在哪里；
为什么放在 criterion-bearing sentence 前；
no-distraction / distraction版本如何保持其他内容一致；
distractor 本身不删除 target source sentence。

#### 3.2.6 Scoring Rubric and Atomic Checklist Criteria

把原来 Rubric + Checklist 合在一起。

说明：

Reference Answer
→ semantic propositions
→ atomic checklist criteria
→ source evidence

强调：

criterion 是 source-grounded；
criterion mutually interpretable；
missing ≠ contradicted；
partial knowledge 通过多个 atomic criteria 表现。

#### 3.2.7 Criterion-Level LLM-as-a-Judge Scoring

说明：

Question + criterion + source evidence + student answer
→ blind Judge
→ Correct / Absent / Contradicted
→ deterministic score aggregation

然后就在这里接 Judge reliability validation：

human validation sample；
criterion-level agreement；
Cohen’s κ；
Macro-F1；
repeatability；
verbosity / phrasing robustness。

这样读者刚知道 Judge 怎么工作，马上知道：

Judge 是否可信。

### 3.3 Learner Representation: Persona Prompting versus CPB

- Persona prompting的流程和CPB的流程，区别在哪些环节？在比较什么？

#### 3.3.1 Representation-Level Comparison

![image-20260825020232475](/Users/willow/Library/Application Support/typora-user-images/image-20260825020232475.png)

正文再解释三个核心比较维度：

> **Representation:** Persona Prompt vs Functional Constraints
>  **Information access:** Full Context vs Explicit LTM
>  **Traceability:** Implicit vs Explicit Process/Knowledge State

也就是说，**三个比较维度不要画进图里**。图只展示结构；“这张图意味着什么”交给正文。

这里突出三个区别：

Representation locus

Prompt：

characteristics predominantly encoded in instructions.

CPB：

selected cognitive characteristics implemented as process constraints.

Information access

Prompt：

full teaching conversation remains accessible.

CPB：

answer generation only accesses explicit retained knowledge.

Traceability

Prompt：

final answer observable, internal knowledge state implicit.

CPB：

source → processing → LTM → response can be inspected.

#### 3.3.2 Persona-Prompted Learner Procedure

介绍 Prompt learner 实际怎么运行。

例如：

System Prompt
→ R01
→ fixed acknowledgement
→ R02
→ fixed acknowledgement
→ ...
→ RN
→ frozen conversation state
→ independently branched assessment questions

说明：

Prompt-NT / Prompt-ADHD；
persona instruction structure；
full-context access；
不建立 explicit WM / LTM；
temperature / generation setting 在 3.6 再统一交代。

完整 prompts 放 Appendix。


#### 3.3.3 CPB Learner Procedure

这里只讲宏观 CPB flow：

Teaching Round
→ Attention
→ WM processing
→ Encoding
→ Explicit LTM
→ Question
→ LTM-only answer generation

强调：

CPB learner 不通过 system prompt 被要求“act ADHD”。

ADHD-related constraint 主要发生在：

processing layer。

回答阶段则基于：

explicit LTM。

具体 Attention / WM / Encoding 怎么做——下一节再展开。


### 3.4 Cognitive-Process-Based Mechanisms

- CPB的核心机制到底怎么实现？
- Attention Filter
- WM capacity / PDB
- Knowledge Encoding and Explicit Knowledge

#### 3.4.1 Attention Filter

回答三个问题：

理论上代表什么？

ADHD-related susceptibility to attentional disruption。

系统里怎么实现？
distractor trigger；
trigger probability；
affected target span / following source information；
available input 如何改变。
产生什么可观察状态？
Attention activated / not activated；
sentences removed；
available-information retention。

这里不报告 Study 结果。

#### 3.4.2 Working-Memory Processing Capacity

同样回答：

WM constraint 表示什么 → 怎么计算 → 怎么改变 available input。

##### 3.4.2.1 Processing Demand and WM Load

说明 PDB 如何进入 WM mechanism。

前面 3.2 已经告诉读者：

PDB 是怎么给教材计算的。

这里告诉读者：

CPB 怎么“使用”这个值。

##### 3.4.2.2 WM Capacity Threshold

说明：
capacity definition；
threshold；
information selection / retention；
Zero / Low / Medium / High 后面如何参数化。

##### 3.4.2.3 Processing-Demand Estimator Sensitivity

把原来独立的 sensitivity analysis 放回来。

例如：

alternative surprisal estimators；
relative PDB ordering；
rank agreement；
threshold sensitivity；
选择最终 estimator 的依据。

这样读者在看到 WM 设计的时候，当场知道：

它不是依赖一个非常脆弱的 demand estimator。

#### 3.4.3 Knowledge Encoding

这里特别要说明：

Encoding 是 shared downstream stage，不是第三个 ADHD mechanism。

说明：

Available Input → encoded propositions；
encoding prompt / procedure；
imperfect encoding 可以发生；
A0W0 因此不是 perfect-memory condition，而是 encoding-only reference。

这点对 Study 1 很关键。

#### 3.4.4 Explicit Knowledge State and Memory-Constrained Answering

虽然三个 manipulated mechanisms 只有 Attention、WM、Encoding，但我还是建议保留一个很短的小节讲输出状态。

不是第四个 cognitive mechanism，而是：

architecture consequence。

说明：

encoded information 写入 explicit LTM；
source / round IDs 保留；
assessment 时 source lesson 不再提供给 CPB；
answer generation only receives explicit LTM；
Language / personality attributes 后续可进入 response rendering，而不修改已有 LTM。

这会直接为 Study 3 的 traceability 铺路。

3.4 结尾可以做一个非常重要的过渡：

到这里，framework architecture、shared materials 和 CPB mechanisms 都已经定义。接下来的问题不再是“系统是什么”，而是“这些设计能否回答三个研究问题”。

然后进入 3.5。



### 3.5 Research Design and Evaluation Strategy

为了回答RQ1-RQ3，具体设计了什么Study、预期什么pattern、看什么指标？
同时涵盖：

Experimental Design
- Hypotheses
- Evaluation Metrics
- Planned Analysis

#### 3.5.1 Research Questions and Study Mapping
| RQ  | Evidential role                       | Study   | Core comparison                    | Main evidence                          |
| --- | ------------------------------------- | ------- | ---------------------------------- | -------------------------------------- |
| RQ1 | Mechanistic validity                  | Study 1 | Attention × WM ablation            | information-flow trace                 |
| RQ2 | Comparative representational validity | Study 2 | Prompt vs graded CPB               | distraction + PDB sensitivity          |
| RQ3 | Multidimensional robustness           | Study 3 | joint vs factorised representation | structural preservation + interference |

同时说明：

每个 Study 都按照同一逻辑展开：

RQ → Hypothesis / Expected Pattern → Experimental Design → Evaluation Metrics → Planned Analysis

#### 3.5.2 Preliminary Knowledge and Memory-Access Controls
这个位置很合适，因为它验证的是：

三个 Study 能成立的共同前提。

可以包括两个相关 control。

Preliminary Knowledge Test

检查：

不提供 teaching material / explicit LTM 时，模型是否能依靠 pretrained knowledge 直接回答。

它回答：

assessment items 是否真正依赖 lesson-specific acquired information。

Memory-Access Control

检查：

CPB student 是否确实只能根据 explicit LTM 回答，而无法访问原始 lesson。

#### 3.5.3 Study 1 — Mechanistic Validity of CPB
##### 3.5.3.1 Research Question and Hypotheses
对应 RQ1。

Hypothesis 不需要一条 metric 一个。

应该是理论层面，例如：

Attention ON 应减少 distraction-associated information availability；
WM ON 应对 high-demand material 产生额外信息损失；
combined condition 应同时呈现两类 effects；
downstream LTM / question performance 应能追溯到 upstream information loss。

##### 3.5.3.2 Experimental Conditions

2 × 2：

A0W0
A1W0
A0W1
A1W1

强调：

A0W0 = encoding-only reference。

##### 3.5.3.3 Mechanistic and Information-Retention Measures





##### 3.5.3.4 Planned Comparisons and Analysis

例如：

A1W0 vs A0W0 → Attention effect
A0W1 vs A0W0 → WM effect
A1W1 vs single-mechanism conditions → combined effect

#### 3.5.4 Study 2 — Comparative Representational Validity

##### 3.5.4.1 Research Question and Expected Behavioural Patterns

先说明RQ2要研究的问题：哪个更符合理论预期？

理论上应该看到什么？ADHD在干扰条件和PDB高的段落学习表现低于NT。

##### 3.5.4.2 Experimental Conditions

先介绍总体的实验设计：两种方法模拟学生。

##### A. Persona-Prompted Conditions

Prompt-NT
Prompt-ADHD

×：

no distraction / distraction

##### B. Graded CPB Conditions

解释在Study1已经检验过交叉效应，因此为了限制影响等级更明显，避免交叉干扰，因此采用了Attention和WM capacity限制程度同步递增的分级方式；

Zero
Low
Medium
High

× 有干扰教材 distraction，因为CPB的被干扰能力可以通过注意力filter参数控制。

这里给 parameter table：

Attention trigger probability；
WM capacity。

解释参数选择原因，虽然有研究报告真实人类ADHD的被干扰后任务遗漏概率，但现实情况复杂，不能采用。因为本研究主要目的是验证CPB的人格模拟机制有效性，并非和真实ADHD学生的行为完全一致性，所以选择通过控制参数变量来模拟不同等级，Attention选择对称分等级，WM Capacity按照1/3；1/2；2/3的分层threshold选取。设计逻辑讲清楚。


##### 3.5.4.3 Evaluation Measures
A、B：先分别看两种 representation 自己能不能产生预期差异。
C、D：再真正把 Prompt 和 CPB 放到一起，比较它们对两个 ADHD-related theoretical manipulations——Distraction 和 Processing Demand——谁表现得更系统。

Study 2 的证据逻辑就会特别清楚：

> **A — Prompt 自己能不能区分 NT / ADHD？**
>  ↓
>  **B — CPB 自己能不能产生 graded constraint effect？**
>  ↓
>  **C — 两者谁更系统地响应 Attention-related distraction？**
>  ↓
>  **D — 两者谁更系统地响应 WM-related processing demand？**

这其实非常漂亮，因为 **A/B 是 representation-internal validity，C/D 才是 comparative representational validity**。E.作为Supplementary Analysis: Independent versus Integrative Question Performance



**Overview.** 

1-先看Persona能不能区分

2-然后看CPB梯度

3-比较敏感性

4-比较processing Demand 敏感性



**A. Does Persona Prompting Differentiate NT and ADHD Learners?**

这一部分只看 **Prompt 内部**，先不跟 CPB 比。

核心问题：

> 在其他条件完全一致时，仅改变 NT / ADHD persona instruction，是否足以产生理论预期的学习表现差异？

主要看：

- Prompt-NT vs Prompt-ADHD 的平均 question score；
- 分别在 **no-distraction** 和 **distraction** 条件下计算 ADHD−NT difference；
- Prompt-NT 的 distraction decrement；
- Prompt-ADHD 的 distraction decrement；
- **Persona × Distraction interaction**，看 ADHD persona 是否比 NT persona 更容易受到 distraction 影响；
- ceiling rate 作为 diagnostic，判断 NT–ADHD differentiation 是否受到满分压缩。

这里的判断逻辑不是：

> ADHD 分数低 = 模拟成功。

而是：

> **Persona identity 是否能够在理论相关的条件下产生有方向的 behavioural differentiation。**

这里不要放 PDB。PDB 属于第四条证据链。

**B. Does Increasing CPB Constraint Severity Produce a Graded Learning-Performance Response?**

第二部分只看 **CPB 内部**。

核心问题：

> 当显式 cognitive constraint 从 Zero → Low → Medium → High 增强时，学习表现是否出现有序的 graded response？

主要看：

- Zero、Low、Medium、High 的 mean question score；
- no-distraction 条件下是否存在有序梯度；
- distraction 条件下是否仍然存在有序梯度；
- constraint severity 与 score 的 ordinal / monotonic association；
- Low → Medium → High effect 是否跨 lesson、run 保持一致；
- Supporting measure 可以包括 severity–score Spearman correlation。

这里是在回答：

> **CPB 能不能通过显式调节 cognitive constraint，产生可控的 behavioural gradient？**

注意这里仍然不是分析 Attention 和 WM 各自的独立贡献——那个已经属于 Study 1。

**C. Which Representation Shows Greater Sensitivity to Controlled Distraction?**到这里才第一次真正进行 **Prompt vs CPB 的跨 representation 比较**。

核心问题：

> 当教学输入中加入完全相同的 controlled distraction 时，哪种 learner representation 的表现变化更系统地符合 attentional-disruption hypothesis？

先分别计算每个 condition 的：

ΔD=Scoredistraction−Scoreno distraction

然后比较：

**Prompt side**

- Prompt-NT distraction effect；
- Prompt-ADHD distraction effect；
- ADHD 是否比 NT 有更大的 decrement。

**CPB side**

- Zero / Low / Medium / High 各自的 distraction effect；
- distraction decrement 是否随 constraint severity 增大；
- **Constraint × Distraction** pattern。

最后才做 representation-level interpretation：

> Prompt 是否只是 persona 标签不同，但对实际 distraction 缺乏系统性响应？
>  CPB 是否随着 attentional susceptibility 增强，而出现 progressively stronger distraction effects？

所以 C 的核心不是比较：

> “Prompt 平均 9 分，CPB 平均 5 分，所以 CPB 更 ADHD。”

而是比较：

> **哪种 representation 的 performance change 更跟随 controlled distraction manipulation。**

这一点非常重要。

**D. Which Representation Shows Greater Sensitivity to Instructional Processing Demand?**
第四部分对应另一个 ADHD-related mechanism：

Working-memory-related processing demand。

核心问题：

当 instructional PDB 增加时，不同 representation 的 question performance 是否系统下降？这种负向关系是否随着 CPB cognitive constraint 增强而加强？

这里 primary analysis 建议只用 Independent Questions，因为它们能够明确映射到一个 target teaching round 和对应 PDB。

主要指标：

Prompt-NT 的 PDB–score slope；
Prompt-ADHD 的 PDB–score slope；
CPB Zero / Low / Medium / High 的 PDB–score slope；
每个 condition 的 Spearman ρ 作为 supporting metric；
PDB × CPB severity interaction；
必要时比较 Prompt 与 CPB 的 slope pattern。

理论预期不是简单：

PDB 越高，大家都得分越低。

更重要的是：

随着 CPB constraint 增强，higher-PDB instructional segments 是否变得 disproportionately vulnerable。

因此 D 真正检验的是：

selective sensitivity to processing demand，而不是 generalized score reduction。

**E. Supplementary Analysis: Independent versus Integrative Question Performance**

加在D后面简要说明。

因为它不直接对应 RQ2 里两个核心 manipulation：

distraction
processing demand

而是一个 task-structure 的补充观察。

主要看：

IntegrationGap=
S
ˉ
Independent
	​

−S
Integrative
	​


然后明确：

这是 secondary behavioural evidence，不能单独决定 RQ2 是否得到支持。



#### 3.5.5 Study 3 — Multidimensional Representational Robustness
##### 3.5.5.1 Research Question and Robustness Hypotheses

RQ3 不再简单定义为：

CPB variance 更小。

而是检验：

cognitive-constraint structure 是否保留；
added attributes 是否造成 systematic score displacement；
cross-attribute effects 是否可以被定位；
Prompt 与 CPB 的 interference pattern 有何不同。

##### 3.5.5.2 Contrastive Learner Profiles
2 × 2：

Language Ability：High / Low
BF：learning-congruent / learning-challenging

形成：

A1；
A2；
B1；
B2。

说明：

profiles defined a priori。

##### 3.5.5.3 Joint-Prompt and Factorised Implementations
**Prompt**

ADHD + Language + BF：
jointly encoded in persona prompt。

**CPB**
ADHD-related cognition → process constraints；
knowledge → explicit LTM；
Language/BF → response-facing layer。

这就是 Study 3 的理论比较点。


##### 3.5.5.4 Matched Study 2 Baselines

定义：

Δ=ScoreStudy3−Scorematched Study2
	


说明：

为什么 Study 2 是 no-added-attribute baseline；
balanced four-profile mean 只是 experimental summary；
不代表 population prevalence。

##### 3.5.5.5 Evaluation Measures

建议分五类：

**Attribute-induced displacement**
matched score Δ；
mean absolute displacement。
Prompt profile effects
A1−A2；
B1−B2；
Language effect；
BF effect；
Language × BF。

**Structural robustness**
preservation of Low > Medium > High。
Process localisation
matched processing trajectory；
identical LTM；
response-level score change。

**Variability and attribute fidelity**
between-profile variation；
within-profile run variation；
answer length / style；
BF-TC fidelity if validated。

##### 3.5.5.6 Planned Analysis and Interpretation Boundaries

这里提前声明：

score invariance ≠ mechanism invariance。

以及：

identical LTM 下 score difference 不应解释成 learning difference。

这一句话以后会非常重要。

### 3.6 Implementation, Reproducibility and Ethical Scope

只回答：

这个研究实际怎么实现、别人如何复现、结论应该在哪些边界内解释。

#### 3.6.1 Models and Generation Settings

包括：

learner model；
Judge model；
API / checkpoint version；
temperature；
top-p；
max tokens；
Prompt temperature = 0 的设计理由；
CPB stochasticity 来自哪一个显式机制。

#### 3.6.2 Experiment Execution and Reproducibility

包括：

five repeated runs；
random seeds；
caching；
file naming；
config files；
frozen materials；
prompt versioning；
model/version logging；
intermediate state retention；
analysis scripts。

重点区分：

decoding randomness
vs
mechanism-driven randomness。

#### 3.6.3 Statistical Uncertainty and Repetition Conventions

如果统计内容在 Study 内较多，这里可以只统一说明共用规则：

repeated-run treatment；
CI convention；
paired observations；
lesson-level blocking；
computational-run uncertainty；
不把 5-run CI 解释成 human-population inference。

如果篇幅很短，也可以并入 3.6.2。

#### 3.6.4 Ethical Scope and Interpretation

包括：

synthetic learners ≠ real ADHD students；
不用于 diagnosis；
不声称 comprehensive ADHD fidelity；
不使用真实患者/student private data；
stereotyping risk；
model bias；
educational deployment limitations；
“ADHD-related cognitive mechanisms” 而不是“真实 ADHD 行为”。

## 4  Results

### 4.1 Results Overview



### 4.2 RQ1 — Cognitive-Mechanism Effects

- 

#### 4.2.2 Attention-Filtering Effects

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

#### 4.2.3 Working-Memory Capacity Effects

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

#### 4.2.4 Combined Attention × WM Effects

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

#### 4.2.5 End-to-End Information-Loss Attribution and Traceability

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

#### 4.2.6 RQ1 Summary

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

### 4.3 RQ2 — CPB versus Persona-Prompted ADHD Simulation

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

#### 4.3.1 Persona-Prompted NT–ADHD Differentiation

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

#### 4.3.2 Graded CPB Constraint Effects

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

#### 4.3.3 Sensitivity to Processing Demand

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

#### 4.3.4 Independent versus Integrative Learning

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

#### 4.3.5 RQ2 Summary

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

### 4.4 RQ3 — Cross-Attribute Robustness

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

#### 4.4.1 Aligned-Profile Sensitivity

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

#### 4.4.2 Conflict-Profile Robustness

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

#### 4.4.3 Preservation of ADHD-Related Learning Effects

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

#### 4.4.4 Attribute Fidelity and Cross-Attribute Interference

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

#### 4.4.5 Prompt-Based versus Factorised Representation

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

#### 4.4.6 RQ3 Summary

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

### 4.5 Summary of Findings

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

## 5  Discussion

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

### 5.1 Answering the Main Research Question

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

### 5.2 Interpreting the Cognitive-Process Results

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

### 5.3 What Persona Prompting Can and Cannot Represent

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

### 5.4 Factorised Student Representation

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

### 5.5 Implications for LLM-Based Learner Simulation

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

#### 5.5.1 From Persona Description to Functional Representation

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

#### 5.5.2 Learner Models May Need to Be Factorised Rather Than Monolithic

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

#### 5.5.3 Evaluation Should Target Learning Processes and Outcomes, Not Only Persona Plausibility

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

#### 5.5.4 Traceability May Be Important for Scientific Uses of Synthetic Learners

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

#### 5.5.5 Implications for Educational Use

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

### 5.6 Strengths and Limitations

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

### 5.7 Ethical Interpretation

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

## Chapter 6  Conclusions

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

## Chapter 7  Future Work

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

## References

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**

## Appendices

**Section Planning Card**

- **Section purpose:**
- **Question answered:**
- **RQ contribution:**
- **Dependencies from earlier sections:**
- **Required evidence or content:**
- **Core references:**

| No. | Content requiring support | Core reference(s) |
|---|---|---|
| 1 | | |

- **Core figure(s) and table(s):**
- **Writing logic:**
- **Expected conclusion:**
- **Transition to the next section:**
- **Claim boundary:**
