# Beyond Persona Prompting: A Cognitive-Process-Based Framework for ADHD Student Simulation with Large Language Models

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

#### 3.1.2 Teaching Phase

#### 3.1.3 Assessment Phases

### 3.2 Shared Instructional and Assessment Resources

#### 3.2.1 Source Instructional Materials

#### 3.2.2 Text Preprocessing and Teaching-Round Segmentation

#### 3.2.3 Instructional Processing-Demand Annotation and Item Selection

3.2.3.x Processing-Demand Estimator Sensitivity

#### 3.2.4 Question Construction and Candidate Eligibility

#### 3.2.5 Question-Targeted Distractor Construction and Assignment

#### 3.2.6 Scoring Rubric and Atomic Checklist Criteria

#### 3.2.7 Criterion-Level LLM-as-a-Judge Scoring

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
Can a cognitive-process-based representation provide a more theory-consistent, traceable, and robust basis for simulating ADHD-related learning behaviour than persona prompting alone?

This overarching question is addressed through three research questions with distinct evidential roles:

**RQ1 — Mechanism:**  
Does the CPB processing pipeline produce intended and traceable transitions from instructional information, through attention, working-memory processing and encoding, to the downstream knowledge state?

**RQ2 — Representation:**  
Compared with persona prompting, does CPB produce learning behaviour that shows more theoretically consistent sensitivity to controlled distraction and processing demand?

**RQ3 — Multidimensional Robustness:**  
When additional functionally heterogeneous learner characteristics are introduced, does a factorised CPB representation maintain learning outcomes more consistently than joint persona prompting?

The three research questions are examined through a progressive experimental design. Study 1 first evaluates whether the internal CPB mechanisms operate as intended and produce traceable information-state transitions. Study 2 then compares CPB with persona prompting under controlled distraction and instructional processing demand. Finally, Study 3 introduces additional heterogeneous learner characteristics to examine the robustness of joint and factorised representations. Table 3.X summarises the mapping between research questions, evidential roles, experimental studies, and the primary forms of evidence used to address each question.

**Table 3.X. Mapping of research questions to experimental studies and evidence**

| RQ      | Evidential Role                       | Study and Core Comparison                                    | Primary Evidence                                             |
| ------- | ------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **RQ1** | Mechanistic validity                  | **Study 1:** \(2 \times 2\) Attention OFF/ON × WM OFF/ON ablation, with a shared Encoding stage and A0W0 as an encoding-only reference | Correct mechanism execution and traceable information-state changes |
| **RQ2** | Comparative representational validity | **Study 2:** Prompt-NT, Prompt-ADHD, CPB Zero, Low, Medium and High under matched distraction and instructional processing-demand conditions | Systematic sensitivity to distraction and processing demand  |
| **RQ3** | Representational robustness           | **Study 3:** Matched aligned and conflicting multidimensional learner profiles under joint persona prompting and factorised CPB representation | Preservation of cognitive-constraint structure and localisation of cross-attribute effects |

#### 3.5.2 Study 1 — Mechanistic Validity of CPB

##### 3.5.2.1 Research Question and Expected Patterns

##### 3.5.2.2 Experimental Design and Conditions

##### 3.5.2.3 Evaluation Measures and Planned Analysis

#### 3.5.3 Study 2 — Comparative Representational Validity

##### 3.5.3.1 Research Question and Expected Patterns

##### 3.5.3.2 Experimental Design and Conditions

###### A. Persona-Prompted Conditions

###### B. Graded CPB Conditions

##### 3.5.3.3 Evaluation Measures and Planned Analysis

#### 3.5.4 Study 3 — Multidimensional Representational Robustness

##### 3.5.4.1 Research Question and Expected Patterns

##### 3.5.4.2 Experimental Design and Conditions
###### A. Joint-Prompt and Contrastive Learner Profiles

##### 3.5.4.3 Evaluation Measures and Planned Analysis


### 3.6 Implementation, Reproducibility and Ethical Scope

#### 3.6.1 Models and Generation Settings

#### 3.6.2 Experiment Execution and Reproducibility

#### 3.6.3 Statistical Uncertainty and Repetition Conventions

#### 3.6.4 Ethical Scope and Interpretation

## 4  Results

### 4.1 Results Overview

### 4.2 RQ1 — Cognitive-Mechanism Effects

#### 4.2.2 Attention-Filtering Effects

#### 4.2.3 Working-Memory Capacity Effects

#### 4.2.4 Combined Attention × WM Effects

#### 4.2.5 End-to-End Information-Loss Attribution and Traceability

#### 4.2.6 RQ1 Summary

### 4.3 RQ2 — CPB versus Persona-Prompted ADHD Simulation

#### 4.3.1 Persona-Prompted NT–ADHD Differentiation

#### 4.3.2 Graded CPB Constraint Effects

#### 4.3.3 Sensitivity to Processing Demand

#### 4.3.4 Independent versus Integrative Learning

#### 4.3.5 RQ2 Summary

### 4.4 RQ3 — Cross-Attribute Robustness

#### 4.4.1 Aligned-Profile Sensitivity

#### 4.4.2 Conflict-Profile Robustness

#### 4.4.3 Preservation of ADHD-Related Learning Effects

#### 4.4.4 Attribute Fidelity and Cross-Attribute Interference

#### 4.4.5 Prompt-Based versus Factorised Representation

#### 4.4.6 RQ3 Summary

### 4.5 Summary of Findings

## 5  Discussion

### 5.1 Answering the Main Research Question

### 5.2 Interpreting the Cognitive-Process Results

Working memory (WM) 是一种容量有限的认知系统，用于在当前任务执行过程中暂时维持并处理与任务相关的信息，而不仅仅是对信息进行被动的短时存储 [baddeley2012working]。这一功能对于学习尤其重要，因为学习者在接收新的教学信息时，通常需要暂时保持前文内容，同时对新输入进行理解、比较和整合。已有课堂研究也表明，working-memory ability 与需要同时保持和处理信息的学习活动表现密切相关 [gathercole2008classroom]。因此，从学习过程的角度看，一段教学信息即使已经被学习者注意到，也并不意味着它能够不受限制地继续进入后续知识形成过程；当前可用的 processing resources 仍然会对进一步的信息处理形成约束。

Working Memory 对 ADHD learner simulation 具有独立于 Attention 的理论意义。ADHD-related cognitive differences 并不仅表现为 susceptibility to distraction，已有 meta-analytic evidence 同样显示，与 typically developing peers 相比，ADHD 儿童和青少年在多个 working-memory domains 上存在可靠的 group-level performance differences [martinussen2005workingmemory; kasper2012moderators]。这些研究并不意味着所有 ADHD individuals 都具有一个固定且字面意义上“更小”的记忆空间，而是支持 ADHD 与 working-memory performance limitations 之间存在稳定的群体层面关联。因此，如果 CPB 仅通过 Attention Filter 表示 distraction-related information loss，而不进一步表示 post-Attention processing constraints，就会将两类功能上不同的 ADHD-related cognitive characteristics重新合并到同一个机制之中。基于这一点，本研究将 Attention 和 WM 分别建模：前者描述教学信息是否在干扰后仍然可用，后者描述这些仍然可用的信息是否能够在有限 processing capacity 下继续被处理。

基于上述理论定位，CPB 将 WM 表示为位于 **Attention 与 Knowledge Encoding 之间的 processing-capacity constraint**。对于第 \(r\) 个 Teaching Round 和条件 \(c\)，Attention Filter 首先产生 post-Attention input \(P_{r,c}\)；Working-Memory stage 随后进一步限制其中能够继续进入 Knowledge Encoding 的信息，并形成 Available Input \(A_{r,c}\)：

\[
P_{r,c}
\xrightarrow{\mathrm{Working\ Memory}}
A_{r,c}.
\]

因此，在 CPB 中，**Attention 决定哪些 instructional information 在干扰后仍然 available，而 WM 决定这些 remaining information 在当前 processing constraint 下能否继续进入后续处理**。这里的 WM mechanism 并不试图估计真实学生的生理 working-memory capacity，也不直接生成 Explicit LTM 或改变最终 assessment answer；它只控制能够到达 shared Knowledge Encoder 的 instructional information。下一节进一步说明这一 processing-capacity constraint 如何通过 instructional processing demand、condition-specific capacity threshold 以及相应的信息限制规则进行具体实现。

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
