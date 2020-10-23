---
title: 协作规范
group:
    title: 开发规范
    order: 1
order: 0
---

# 协作规范

## 主要分支

### 主分支（master）

主分支是始终表示当前生产就绪状态的主要分支，
每当开发分支中的代码达到稳定状态并准备发布时，
所有的更改都应该合并到主分支，然后打上发布标签。

### 开发分支（develop）

开发分支是始终表示当前最新交付的开发更改的状态的主要分支。

## 辅助分支

### 功能分支（feature）

功能分支用于为即将发布或将来版本开发新功能，以 feature-\* 为命名约定。
它通常从开发分支中签出，完成功能后合并回开发分支。
它通常仅存在于开发人员的本地存储库中。

### 创建一个功能分支

```shell
$ git checkout -b feature-[分支名称]
```

### 将功能分支合并到开发分支

```shell
$ git checkout develop
切换到分支'develop'

$ git merge --no-ff feature-[分支名称]
更新ea1b82a..05e9557
（更改摘要）

$ git branch -d feature-[分支名称]
删除分支'feature-[分支名称]'（以前为05e9557）。

$ git push origin develop
```

### 为什么要使用 --no-ff

--no-ff 标志使合并始终创建一个新的提交对象，这样可以避免丢失存在的有关分支历史要素信息，并将所有添加了要素的提交分组在一起。
还原整个功能（即一组提交）确实很头疼，而如果使用了--no-ff 标志，则很容易做到 。
![GitFlow](./git-merge-no-ff.png)

## 发布分支（release）

发布分支用于为即将发布新版本做准备工作，以 release-\* 为命名约定。
它通常从开发分支中签出，允许进行较小的错误修复并为发布准备元数据（版本号，构建日期等）。
完成发布后，当前开发分支将被清空用于接收下一个大型发行版的功能。

### 创建一个发布分支

加入当前的生产版本为 1.1.5，我们即将发布一个大版本 1.2.0。
因此，我们分支并给发布分支起一个反映新版本号的名称：

```shell
$ git checkout -b release-1.2 develop
切换到新的分支 'release-1.2'

$ ./bump-version.sh 1.2
文件已成功修改，版本升至1.2。

$ git commit -a -m "feat: 将版本号加至1.2"
[release-1.2 74d9424]将版本号加至1.2
1个文件已更改，1个插入（+），1个删除（-）
```

创建新分支并切换到该分支后，我们修改版本号。这里 bump-version.sh 是一个虚构的 shell 脚本，它更改了工作副本中的某些文件以反映新版本。然后，提交被修改的版本号。

这个新分支有可能会存在一段时间，直到可以肯定地发布该版本为止。在此期间，错误修复程序可能会应用于此分支（而不是 develop 分支）。严格禁止在此处添加大型新功能。

### 完成发布

当发布分支的状态准备好成为真实发布时，需要执行一些操作。首先，将 release 分支合并到 master 中。接下来，master 必须标记该提交，以方便将来参考此历史版本。最后，需要将在 release 分支上所做的更改重新合并到 develop 中，以便将来的发行版也包含这些错误修复。

```shell
$ git checkout master
切换到分支'master'

$ git merge --no-ff release-1.2
递归合并。
（更改摘要）

$ git tag -a 1.2
```

为了保留在 release 分支中所做的更改，我们需要将这些更改重新合并到 develop 中。

```shell
$ git checkout develop
切换到分支'develop'

$ git merge --no-ff release-1.2
递归合并。
（更改摘要）
```

这一步很可能会导致合并冲突（可能是因为我们更改了版本号）。如果是这样，请修复它并提交。

现在我们已经完成了发布，可以删除发布分支：

```shell
$ git branch -d release-1.2
删除了分支'release-1.2'（原为 ff452fe）。
```

## 补丁分支（hotfix）

补丁分支与发布分支非常相似，尽管它们是计划外的，但它们也旨在为新的生产版本做准备，以 hotfix-\* 为命名约定。。
当必须立即解决生产版本中的严重错误时，可以从标记生产版本的 master 分支上的相应标记中分支出一个补丁分支。
开发分支的工作可以继续进行，而另一个人正在准备快速修复。

### 创建一个补丁分支

补丁分支是从 master 分支创建的 。假如，1.2 版是当前的生产版本，正在运行，并且由于严重的错误而引起麻烦。但是当前开发分支仍然不稳定。我们这时需要创建一个补丁分支并开始解决问题。

```shell
$ git checkout -b hotfix-1.2.1 master
切换到新分支'hotfix-1.2.1'

$ ./bump-version.sh 1.2.1
文件修改成功，版本升至1.2.1。

$ git commit -a -m "chore: 将版本号加至1.2.1"
[hotfix-1.2.1 41e61bb]将版本号加至1.2.1
更改了1个文件，1个插入（+），1个删除（-）
```

别忘了在分支后增加版本号！

然后，修复该错误，并在一个或多个单独的提交中提交此补丁。

```shell
$ git commit -m "fix: 修复了严重的生产问题"
[hotfix-1.2.1 abbe5d6]修复了严重的生产问题
5 个文件更改，32 个插入（+），17 个删除（-）
```

### 完成补丁分支

完成后，该 bugfix 需要合并回中 master，但也需要合并回中 develop，以确保该 bugfix 也包含在下一发行版中。这与发布分支的完成方式完全相似。

首先，更新 master 并标记发行版：

```shell
$ git checkout master
切换到分支'master'

$ git merge --no-ff hotfix-1.2.1
递归合并。
（变更摘要）

$ git tag -a 1.2.1
```

接下来，在 develop 中也包含错误修正：

```shell
$ git checkout develop
切换到分支'develop'

$ git merge --no-ff hotfix-1.2.1
递归合并。
（更改摘要）
```

最后，删除临时分支：

```shell
$ git branch -d hotfix-1.2.1
删除了分支'hotfix-1.2.1'（以前是abbe5d6）。
```

## 图解

![GitFlow](./git-flow.png)

## 约定式提交

一种用于给提交信息增加人机可读含义的[规范](https://www.conventionalcommits.org/en/v1.0.0/)

### 为什么使用约定式提交

-   自动化生成 CHANGELOG。
-   基于提交的类型，自动决定语义化的版本变更。
-   向同事、公众与其他利益关系者传达变化的性质。
-   触发构建和部署流程。
-   让人们探索一个更加结构化的提交历史，以便降低对你的项目做出贡献的难度。

下文中的关键词 “必须（MUST）”、“禁止（MUST NOT）”、“必要（REQUIRED）”、“应当（SHALL）”、“不应当（SHALL NOT）”、“应该（SHOULD）”、“不应该（SHOULD NOT）”、“推荐（RECOMMENDED）”、“可以（MAY）” 和 “可选（OPTIONAL）” ，解释参考 [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt) 中所述。

1. 每个提交都必须使用类型字段前缀，它由一个名词组成，诸如 feat 或 fix ，其后接一个可选的作用域字段，以及一个必要的冒号（英文半角）和空格。
2. 当一个提交为应用或类库实现了新特性时，必须使用 feat 类型。
3. 当一个提交为应用修复了 bug 时，必须使用 fix 类型。
4. 作用域字段可以跟随在类型字段后面。作用域必须是一个描述某部分代码的名词，并用圆括号包围，例如： fix(parser):
5. 描述字段必须紧接在类型/作用域前缀的空格之后。描述指的是对代码变更的简短总结，例如： fix: array parsing issue when multiple spaces were contained in string.
6. 在简短描述之后，可以编写更长的提交正文，为代码变更提供额外的上下文信息。正文必须起始于描述字段结束的一个空行后。
7. 在正文结束的一个空行之后，可以编写一行或多行脚注。脚注必须包含关于提交的元信息，例如：关联的合并请求、Reviewer、破坏性变更，每条元信息一行。
8. 破坏性变更必须标示在正文区域最开始处，或脚注区域中某一行的开始。一个破坏性变更必须包含大写的文本 BREAKING CHANGE，后面紧跟冒号和空格。
9. 在 BREAKING CHANGE: 之后必须提供描述，以描述对 API 的变更。例如： BREAKING CHANGE: environment variables now take precedence over config files.
10. 在提交说明中，可以使用 feat 和 fix 之外的类型。
11. 工具的实现必须不区分大小写地解析构成约定式提交的信息单元，只有 BREAKING CHANGE 必须是大写的。
12. 可以在类型/作用域前缀之后，: 之前，附加 ! 字符，以进一步提醒注意破坏性变更。当有 ! 前缀时，正文或脚注内必须包含 BREAKING CHANGE: description

### 示例

包含了描述以及正文内有破坏性变更的提交说明

```shell
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

包含了可选的 ! 字符以提醒注意破坏性变更的提交说明

```shell
chore!: drop Node 6 from testing matrix

BREAKING CHANGE: dropping Node 6 which hits end of life in April
```

不包含正文的提交说明

```shell
docs: correct spelling of CHANGELOG
```

包含作用域的提交说明

```shell
feat(lang): add polish language
```

为 fix 编写的提交说明，包含（可选的） issue 编号

```shell
fix: correct minor typos in code

see the issue for details on the typos fixed

closes issue #12
```

## 总结

该协作规范有利于团队成员形成一个易于理解的优雅思维模型，并允许团队成员对分支、提交以及发布过程形成共识。
