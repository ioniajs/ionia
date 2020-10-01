---
title: 协议规范
group:
  title: 开发规范
order: 6
---

# 协议规范

## 前言

在项目中使用“轮子”时必须注意开源协议，切记开源并不等于免费。版权保护方面，虽然相关法规尚有待完善，但在研发商用软件过程中，作为软件开发者还是很有必要了解一下，我们平时使用的开源组件/框架都涉及到了哪些开源协议，以避免今后的法律风险。

现在市面上的开源协议至少有上百种，经过开源促进会（Open Source Initiative）认可的开源协议也多达 70 多种。
这里介绍 6 种常见的开源协议：

- BSD（Berkeley Software Distribution license）
- MIT（Massachusetts Institute of Technology）
- Apache Licence 2.0
- GPL（General Public License）
- LGPL（Lesser General Public License）
- Mozilla（Mozilla Public License）

首先看一张图：
![License](./license.png)

## BSD （Berkeley Software Distribution license）

BSD 源自加州大学伯克利分校，是自由软件中使用最广泛的许可协议之一，其给于使用者很大自由的协议。

使用者可以自由的使用、修改源代码，也可以将修改后的代码开源或闭源，甚至作为商业软件再发布。前提是发布的源代码、二进制可执行文件相关文档中需包含 BSD 许可协议声明，并且不能使用开源机构名字做产品的市场推广。

### 使用 BSD 前提条件：

当你发布使用了 BSD 协议的代码，或以 BSD 协议代码为基础做二次开发时，需要满足以下三个条件：

- 如果再发布的产品中包含源代码，则在源代码中必须带有原来代码中的 BSD 协议；
- 如果再发布的是二进制类库/软件，则需要在类库/软件的文档和版权声明中包含原来代码中的 BSD 协议；
- 不可以使用开源代码的作者/机构名字和原来产品的名字做市场推广；

BSD 鼓励代码共享，但需要尊重代码作者的著作权。
BSD 允许使用者修改和重新发布代码，也允许基于 BSD 代码上开发商业软件的发布和销售，因此很多公司企业在选用开源产品的时候都首选 BSD 协议（因为遵循 BSD 协议的代码完全可控，必要的时候可以修改或者二次开发）。

### BSD 许可条款

```
Copyright (c) 1998, Regents of the University of California All rights reserved.
Copyright (c) 1998 著作权由加州大学董事会所有，著作权人保留一切权利。

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
在符合以下条件的情况下，允许用户对源代码和二进制文件进行使用和再散播，无论源代码是否进行了修改：

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
   对于源码的再散播，必须保留以上著作权声明、此条件列表、以及下述的免责声明.
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
   以二进制可执行文件的散播，必须将以上著作权声明、此条件列表、以及下述的免责声明，添加到文档 以及/或 其他材料中.
3. Neither the name of the University of California, Berkeley nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
   未事前获取书面许可，不得使用加州大学伯克利分校或本软件贡献者之名称，来为本软件之派生物做任何表示支持、认可或推广、促销之行为。

this software is provided by the regents and contributors "as is" and any express or implied warranties, including, but not limited to, the implied warranties of merchantability and fitness for a particular purpose are disclaimed. in no event shall the regents and contributors be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to, procurement of substitute goods or services; loss of use, data, or profits; or business interruption) however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in any way out of the use of this software, even if advised of the possibility of such damage.

免责声明：
本软件是由加州大学董事会及本软件之贡献者提供（本就如此），本软件包装不负任何明示或默示之担保责任，包括但不限于就适售性以及特定目的的适用性为默示性担保。加州大学董事会及本软件之贡献者，无论任何条件、无论成因或任何责任主义、无论此责任为因合约关系、无过失责任主义或因非违约之侵权（包括过失或其他原因等）而起，对于任何因使用本软件包装所产生的任何直接性、间接性、偶发性、特殊性、惩罚性或任何结果的损害（包括但不限于替代商品或劳务之购用、使用损失、资料损失、利益损失、业务中断等等），不负任何责任，即在该种使用已获事前告知可能会造成此类损害的情形下亦然。
```

## MIT（Massachusetts Institute of Technology）

MIT 源自麻省理工学院（Massachusetts Institute of Technology, MIT）

MIT 是和 BSD 一样宽范的许可协议，作者只想保留版权，而无任何其他了限制。
使用者只需在发布的源代码、二进制可执行文件相关文档中包含 MIT 许可协议声明，便可自由的使用、修改源代码、作为商业软件再发布、甚至使用开源机构名字做产品的市场推广。

### MIT 许可条款

```
Copyright (C) [year] [copyright holders]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

the software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. in no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.
```

## Apache Licence 2.0

Apache Licence 是一个由 Apache 软件基金会发布的自由软件许可证，最初为 Apache http 服务器而撰写。
该协议与 BSD 类似，同样鼓励代码共享和尊重原作者的著作权，允许代码修改、再发布。
Apache Licence 也是对商业应用友好的许可，使用者也可以在需要的时候修改代码来满足需要并作为开源或商业产品发布/销售。

### 前提条件

需要满足的条件与 BSD 类似：

- 需要给使用代码的用户拷贝一份 Apache Licence
- 如果你修改了代码，需要再被修改的文件中说明。
- 在延伸的代码中（修改和有源代码衍生的代码中）需要带有原来代码中的协议，商标，专利声明和其他原来作者规定需要包含的说明。
- 如果再发布的产品中包含一个 Notice 文件，则在 Notice 文件中需要带有 Apache Licence。你可以在 Notice 中增加自己的许可，但不可以表现为对 Apache Licence 构成更改。
- 你可以在 Notice 中增加自己的许可，但不可以表现为对 Apache Licence 构成更改。

### Apache Licence 2.0 许可条款

```
Copyright [yyyy] [name of copyright owner]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

## GPL（General Public License）

GPL 许可证最初由自由软件基金会（Free Software Foundation）的理查德·斯托曼为 GNU 项目所撰写。

GPL 是一个 Copyleft 许可证，其派生作品只能以相同的许可条款分发：
使用者在软件开发中只要使用 GPL 协议的相关类库与代码，则该软件亦必须采用 GPL 协议，既必须开源与免费。

我们很熟悉的 Linux 操作系统、GNU 编译器集合（GCC）就是采用了 GPL。
GPL 协议和 BSD、MIT、Apache Licence 等鼓励代码重用的许可很不一样。GPL 的出发点是代码的开源/免费使用和引用/修改/衍生代码的开源/免费使用，其不允许修改后和衍生的代码做为闭源的商业软件发布和销售（只要使用 GPL 协议的相关类库与代码，则该软件亦必须采用 GPL 协议，既必须开源与免费。）。
这也就是为什么我们能免费使用各种版本的 linux，包括商业公司的 Linux、个人组织二次开发的 Linux 版本。

### GPL 许可条款

```
Copyright (C) [year] [name of author]

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.
```

## LGPL（Lesser General Public License）

LGPL 原本被称为 GNU Library General Public License，最初于 1991 年发布，为与 GPLv2 保持一致而采用 2.0 版的编号；
许可证的 2.1 版与 1999 年在修订后发布，与此同时，它被重命名为 GNU Lesser General Public License，以显示自由软件基金会（Free Software Foundation）认为并不是所有程序库都应当采用该许可证的态度；
LGPL 的第 3 版于 2007 年发布，它以在 GPL 第 3 版之上附加应用一系列许可的方式表现。

LGPL 是 GPL 的一个主要为类库使用设计的开源协议，与 GPL 要求任何使用/修改/衍生之 GPL 类库的的软件必须采用 GPL 协议不同。
LGPL 允许商业软件通过类库引用方式使用 LGPL 类库而不需要开源商业软件的代码，这使得采用 LGPL 协议的开源代码可以被商业软件作为类库引用并发布和销售；但使用者如果修改了 LGPL 协议的代码或衍生，则所有修改的代码和衍生的代码都必须采用 LGPL 协议。

### LGPL 许可条款

```
Copyright (C) year name of author

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA
```

## Mozilla（Mozilla Public License）

Mozilla 开源协议由 Mozilla 基金会开发并维护。
该协议融合了 BSD 许可与 GNU 通用公共许可协议的特性，追求平衡专有软件和开源软件开发者之间的顾虑（平衡开发者对源代码的需求和他们利用源代码获得的利益）。

Mozilla 允许使用者在自己已有的源代码库上加一个接口，除了对接 Mozilla Public License 开源库的接口程序源代码以 MPL 许可的形式对外许可外，源代码中的其他源码可以不用 MPL 许可证的方式强制对外许可。

### 使用 MPL 前提条件：

- 经 MPL 许可证发布的源代码的修改也要以 MPL 许可证的方式再许可出来；
- 如果修改了代码，需要有一个专门文件描述对源代码程序的修改时间和修改方式；
